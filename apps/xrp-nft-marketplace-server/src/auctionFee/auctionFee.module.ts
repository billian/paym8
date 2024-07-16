import { Module } from "@nestjs/common";
import { AuctionFeeModuleBase } from "./base/auctionFee.module.base";
import { AuctionFeeService } from "./auctionFee.service";
import { AuctionFeeController } from "./auctionFee.controller";
import { AuctionFeeResolver } from "./auctionFee.resolver";

@Module({
  imports: [AuctionFeeModuleBase],
  controllers: [AuctionFeeController],
  providers: [AuctionFeeService, AuctionFeeResolver],
  exports: [AuctionFeeService],
})
export class AuctionFeeModule {}
