import * as graphql from "@nestjs/graphql";
import { SubSubCollectionResolverBase } from "./base/subSubCollection.resolver.base";
import { SubSubCollection } from "./base/SubSubCollection";
import { SubSubCollectionService } from "./subSubCollection.service";

@graphql.Resolver(() => SubSubCollection)
export class SubSubCollectionResolver extends SubSubCollectionResolverBase {
  constructor(protected readonly service: SubSubCollectionService) {
    super(service);
  }
}
