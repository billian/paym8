import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionFeeService } from "./transactionFee.service";
import { TransactionFeeControllerBase } from "./base/transactionFee.controller.base";

@swagger.ApiTags("transactionFees")
@common.Controller("transactionFees")
export class TransactionFeeController extends TransactionFeeControllerBase {
  constructor(protected readonly service: TransactionFeeService) {
    super(service);
  }
}
