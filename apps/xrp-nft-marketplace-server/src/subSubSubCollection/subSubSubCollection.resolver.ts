import * as graphql from "@nestjs/graphql";
import { SubSubSubCollectionResolverBase } from "./base/subSubSubCollection.resolver.base";
import { SubSubSubCollection } from "./base/SubSubSubCollection";
import { SubSubSubCollectionService } from "./subSubSubCollection.service";

@graphql.Resolver(() => SubSubSubCollection)
export class SubSubSubCollectionResolver extends SubSubSubCollectionResolverBase {
  constructor(protected readonly service: SubSubSubCollectionService) {
    super(service);
  }
}
