import * as graphql from "@nestjs/graphql";
import { TransactionFeeResolverBase } from "./base/transactionFee.resolver.base";
import { TransactionFee } from "./base/TransactionFee";
import { TransactionFeeService } from "./transactionFee.service";

@graphql.Resolver(() => TransactionFee)
export class TransactionFeeResolver extends TransactionFeeResolverBase {
  constructor(protected readonly service: TransactionFeeService) {
    super(service);
  }
}
