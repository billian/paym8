import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentPercentageService } from "./paymentPercentage.service";
import { PaymentPercentageControllerBase } from "./base/paymentPercentage.controller.base";

@swagger.ApiTags("paymentPercentages")
@common.Controller("paymentPercentages")
export class PaymentPercentageController extends PaymentPercentageControllerBase {
  constructor(protected readonly service: PaymentPercentageService) {
    super(service);
  }
}
