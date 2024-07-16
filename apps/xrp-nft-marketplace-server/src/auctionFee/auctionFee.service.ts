import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuctionFeeServiceBase } from "./base/auctionFee.service.base";

@Injectable()
export class AuctionFeeService extends AuctionFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
