import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuctionFeeService } from "./auctionFee.service";
import { AuctionFeeControllerBase } from "./base/auctionFee.controller.base";

@swagger.ApiTags("auctionFees")
@common.Controller("auctionFees")
export class AuctionFeeController extends AuctionFeeControllerBase {
  constructor(protected readonly service: AuctionFeeService) {
    super(service);
  }
}
