import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  BadRequestException,
  NotFoundException,
  Res,
  Query,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { LeaseContractService } from "../services/leaseContract.service";
import { CustId } from "../decorators/cust-id.decorator";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { MulterFile } from "../types/multer-file.interface";
import { CreateLeaseContractFromPdfDto } from "../dto/contract.dto";
import { Response } from "express";
import { join } from "path";
import { createReadStream } from "fs";
import { DashboardFiltersDto } from "src/dto/dashboard.filters.dto";
import { PrismaService } from "src/services/prisma.service";

@UseGuards(JwtAuthGuard)
@Controller("leaseContracts")
export class LeaseContractController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly leaseContractService: LeaseContractService) { }

  @Get()
  async getAllContracts(
    @Query() filters: DashboardFiltersDto,
    @CustId() custId: number
  ): Promise<any[]> {
    return this.prisma.buildQuery(
      'leaseContract',
      filters,
      ['renter.firstName', 'renter.lastName', 'location.name'], // Agrega los campos que necesites buscar
      custId
    );
  }
  // return this.leaseContractService.getAllContracts(custId);

  @Get(":id")
  async getContractById(@Param("id") id: string, @CustId() custId: number) {
    return this.leaseContractService.getContractById(Number(id), custId);
  }

  @Post("create")
  async createContract(@Body() contractData: any, @CustId() custId: number) {
    return this.leaseContractService.createContract(contractData, custId);
  }

  // Endpoint para procesar el PDF (recibe multipart/form-data)
  @Post("pdf/process")
  @UseInterceptors(FileInterceptor("file"))
  async processPdf(@UploadedFile() file: MulterFile) {
    if (!file) {
      throw new BadRequestException("No se proporcionó ningún archivo PDF.");
    }
    return this.leaseContractService.processPdf(file);
  }

  // Endpoint para crear contrato a partir de datos extraídos (recibe JSON)
  @Post("createFromData")
  async createFromData(
    @Body() dto: CreateLeaseContractFromPdfDto & { tempPdfPath: string },
    @CustId() custId: number
  ) {
    return this.leaseContractService.createContractFromData(dto, custId);
  }

  // Endpoint para finalizar contrato manualmente
  @Put(":id/finalize")
  async finalizeContract(
    @Param("id") id: string,
    @CustId() custId: number
  ) {
    return this.leaseContractService.finalizeContract(parseInt(id, 10), custId);
  }

  // Endpoint para obtener el PDF del contrato
  @Get(":id/pdf")
  async getContractPdf(
    @Param("id") id: string,
    @CustId() custId: number,
    @Res() res: Response
  ) {
    const contract = await this.leaseContractService.getContractById(Number(id), custId);
    if (!contract || !contract.pdfPath) {
      throw new NotFoundException("PDF no encontrado para este contrato.");
    }
    const pdfFilePath = join(process.cwd(), contract.pdfPath);
    const stream = createReadStream(pdfFilePath);
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="contract_${id}.pdf"`,
    });
    stream.pipe(res);
  }
}
