import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/prisma-client-js';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;
  public contract;
  public invoice;
  public key;
  public location;
  public payment;
  public paymentSchedule;
  public priceAdjustment;
  public user;

  constructor() {
    this.prisma = new PrismaClient();
    this.user = this.prisma.user;
    this.contract = this.prisma.contract;
    this.invoice = this.prisma.invoice;
    this.key = this.prisma.key;
    this.location = this.prisma.location;
    this.payment = this.prisma.payment;
    this.paymentSchedule = this.prisma.paymentSchedule;
    this.priceAdjustment = this.prisma.priceAdjustment;
  }
}
