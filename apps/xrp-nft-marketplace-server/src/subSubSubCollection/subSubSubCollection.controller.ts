import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubSubSubCollectionService } from "./subSubSubCollection.service";
import { SubSubSubCollectionControllerBase } from "./base/subSubSubCollection.controller.base";

@swagger.ApiTags("subSubSubCollections")
@common.Controller("subSubSubCollections")
export class SubSubSubCollectionController extends SubSubSubCollectionControllerBase {
  constructor(protected readonly service: SubSubSubCollectionService) {
    super(service);
  }
}
