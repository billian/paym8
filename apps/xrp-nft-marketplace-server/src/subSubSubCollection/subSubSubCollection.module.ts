import { Module } from "@nestjs/common";
import { SubSubSubCollectionModuleBase } from "./base/subSubSubCollection.module.base";
import { SubSubSubCollectionService } from "./subSubSubCollection.service";
import { SubSubSubCollectionController } from "./subSubSubCollection.controller";
import { SubSubSubCollectionResolver } from "./subSubSubCollection.resolver";

@Module({
  imports: [SubSubSubCollectionModuleBase],
  controllers: [SubSubSubCollectionController],
  providers: [SubSubSubCollectionService, SubSubSubCollectionResolver],
  exports: [SubSubSubCollectionService],
})
export class SubSubSubCollectionModule {}
