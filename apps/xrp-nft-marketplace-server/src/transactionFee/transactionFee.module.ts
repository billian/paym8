import { Module } from "@nestjs/common";
import { TransactionFeeModuleBase } from "./base/transactionFee.module.base";
import { TransactionFeeService } from "./transactionFee.service";
import { TransactionFeeController } from "./transactionFee.controller";
import { TransactionFeeResolver } from "./transactionFee.resolver";

@Module({
  imports: [TransactionFeeModuleBase],
  controllers: [TransactionFeeController],
  providers: [TransactionFeeService, TransactionFeeResolver],
  exports: [TransactionFeeService],
})
export class TransactionFeeModule {}
