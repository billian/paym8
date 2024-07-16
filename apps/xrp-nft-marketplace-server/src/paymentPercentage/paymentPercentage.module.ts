import { Module } from "@nestjs/common";
import { PaymentPercentageModuleBase } from "./base/paymentPercentage.module.base";
import { PaymentPercentageService } from "./paymentPercentage.service";
import { PaymentPercentageController } from "./paymentPercentage.controller";
import { PaymentPercentageResolver } from "./paymentPercentage.resolver";

@Module({
  imports: [PaymentPercentageModuleBase],
  controllers: [PaymentPercentageController],
  providers: [PaymentPercentageService, PaymentPercentageResolver],
  exports: [PaymentPercentageService],
})
export class PaymentPercentageModule {}
