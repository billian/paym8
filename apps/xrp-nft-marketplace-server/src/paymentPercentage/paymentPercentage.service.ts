import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentPercentageServiceBase } from "./base/paymentPercentage.service.base";

@Injectable()
export class PaymentPercentageService extends PaymentPercentageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
