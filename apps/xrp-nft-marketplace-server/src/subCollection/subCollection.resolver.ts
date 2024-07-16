import * as graphql from "@nestjs/graphql";
import { SubCollectionResolverBase } from "./base/subCollection.resolver.base";
import { SubCollection } from "./base/SubCollection";
import { SubCollectionService } from "./subCollection.service";

@graphql.Resolver(() => SubCollection)
export class SubCollectionResolver extends SubCollectionResolverBase {
  constructor(protected readonly service: SubCollectionService) {
    super(service);
  }
}
