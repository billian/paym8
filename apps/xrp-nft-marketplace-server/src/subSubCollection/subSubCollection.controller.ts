import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubSubCollectionService } from "./subSubCollection.service";
import { SubSubCollectionControllerBase } from "./base/subSubCollection.controller.base";

@swagger.ApiTags("subSubCollections")
@common.Controller("subSubCollections")
export class SubSubCollectionController extends SubSubCollectionControllerBase {
  constructor(protected readonly service: SubSubCollectionService) {
    super(service);
  }
}
