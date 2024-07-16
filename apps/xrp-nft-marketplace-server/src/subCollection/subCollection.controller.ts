import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubCollectionService } from "./subCollection.service";
import { SubCollectionControllerBase } from "./base/subCollection.controller.base";

@swagger.ApiTags("subCollections")
@common.Controller("subCollections")
export class SubCollectionController extends SubCollectionControllerBase {
  constructor(protected readonly service: SubCollectionService) {
    super(service);
  }
}
