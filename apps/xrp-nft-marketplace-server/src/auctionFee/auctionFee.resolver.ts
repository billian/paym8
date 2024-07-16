import * as graphql from "@nestjs/graphql";
import { AuctionFeeResolverBase } from "./base/auctionFee.resolver.base";
import { AuctionFee } from "./base/AuctionFee";
import { AuctionFeeService } from "./auctionFee.service";

@graphql.Resolver(() => AuctionFee)
export class AuctionFeeResolver extends AuctionFeeResolverBase {
  constructor(protected readonly service: AuctionFeeService) {
    super(service);
  }
}
