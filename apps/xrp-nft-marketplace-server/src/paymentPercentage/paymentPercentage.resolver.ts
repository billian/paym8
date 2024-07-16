import * as graphql from "@nestjs/graphql";
import { PaymentPercentageResolverBase } from "./base/paymentPercentage.resolver.base";
import { PaymentPercentage } from "./base/PaymentPercentage";
import { PaymentPercentageService } from "./paymentPercentage.service";

@graphql.Resolver(() => PaymentPercentage)
export class PaymentPercentageResolver extends PaymentPercentageResolverBase {
  constructor(protected readonly service: PaymentPercentageService) {
    super(service);
  }
}
