import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Injectable()
export class NotificationService {
  private readonly prisma: PrismaService;
  private readonly userService: UserService;
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }


  async sendEmail(to: string, subject: string, text: string, html?: string) {
    console.log(this.configService.get<string>('EMAIL_USER'));
    console.log(this.configService.get<string>('EMAIL_PASS'));

    try {
      await this.transporter.sendMail({
        from: `"Rent Management" <${this.configService.get<string>('EMAIL_USER')}>`,
        to,
        subject,
        text,
        html,
      });
      console.log(`📧 Email enviado a: ${to}`);
    } catch (error) {
      console.error("❌ Error al enviar email:", error);
    }
  }

  async sendNotifications(userId: number, eventType: string, data: Record<string, any> = {}) {
    const user = await this.userService.getNotificationSettings(userId);

    if (!user || !user.email) return;

    let subject = "";
    let message = "";
    let htmlMessage = "";

    // 🔹 Definir estructura de mensajes basada en el tipo de evento
    const eventTemplates: Record<string, { subject: string; message: string }> = {
      priceIncrease: {
        subject: `📢 Aumento de Precio en ${data.locationName ?? "tu alquiler"}`,
        message: `El precio del alquiler en ${data.locationName ?? "tu alquiler"} ha aumentado a $${data.newPrice ?? "desconocido"}.`,
      },
      contractEnded: {
        subject: `📄 Finalización de Contrato en ${data.locationName ?? "tu alquiler"}`,
        message: `Tu contrato en ${data.locationName ?? "tu alquiler"} ha finalizado el ${data.endDate ?? "fecha desconocida"}. Contáctanos si deseas renovarlo.`,
      },
      paymentReminder: {
        subject: `💰 Recordatorio de Pago - ${data.locationName ?? "tu alquiler"}`,
        message: `Tienes un pago pendiente de $${data.amount ?? "desconocido"} correspondiente al mes ${data.month ?? "desconocido"}/${data.year ?? "desconocido"}.`,
      },
      contractExpiring: {
        subject: `⏳ Tu contrato está por vencer en ${data.locationName ?? "tu alquiler"}`,
        message: `El contrato en ${data.locationName ?? "tu alquiler"} vencerá el ${data.endDate ?? "fecha desconocida"}.`,
      },
      billingSummary: {
        subject: `📊 Resumen de Facturación`,
        message: `Aquí tienes el resumen de pagos recientes:\n${data.payments ?? "No hay datos recientes."}`,
      },
    };

    // 🔹 Seleccionamos el template basado en el `eventType`
    if (!eventTemplates[eventType]) return;

    subject = eventTemplates[eventType].subject;
    message = eventTemplates[eventType].message;

    // 🔹 Convertir mensaje a HTML dinámicamente
    htmlMessage = `<p>${message.replace(/\n/g, "<br>")}</p>`;

    // 🔹 Enviar el email solo si el usuario tiene activadas las notificaciones correspondientes
    const notificationSettingsMap: Record<string, boolean> = {
      priceIncrease: user.notifyPriceIncrease,
      contractEnded: user.notifyContractEnded,
      paymentReminder: user.notifyPaymentReminder,
      contractExpiring: user.notifyContractExpiring,
      billingSummary: user.notifyBillingSummary !== "none",
    };

    if (notificationSettingsMap[eventType]) {
      await this.sendEmail(user.email, subject, message, htmlMessage);
    }
  }


}
