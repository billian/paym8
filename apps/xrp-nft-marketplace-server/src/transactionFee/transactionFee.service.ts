import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionFeeServiceBase } from "./base/transactionFee.service.base";

@Injectable()
export class TransactionFeeService extends TransactionFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
