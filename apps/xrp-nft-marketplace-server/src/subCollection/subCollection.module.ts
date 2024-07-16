import { Module } from "@nestjs/common";
import { SubCollectionModuleBase } from "./base/subCollection.module.base";
import { SubCollectionService } from "./subCollection.service";
import { SubCollectionController } from "./subCollection.controller";
import { SubCollectionResolver } from "./subCollection.resolver";

@Module({
  imports: [SubCollectionModuleBase],
  controllers: [SubCollectionController],
  providers: [SubCollectionService, SubCollectionResolver],
  exports: [SubCollectionService],
})
export class SubCollectionModule {}
