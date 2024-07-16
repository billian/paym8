import { Module } from "@nestjs/common";
import { SubSubCollectionModuleBase } from "./base/subSubCollection.module.base";
import { SubSubCollectionService } from "./subSubCollection.service";
import { SubSubCollectionController } from "./subSubCollection.controller";
import { SubSubCollectionResolver } from "./subSubCollection.resolver";

@Module({
  imports: [SubSubCollectionModuleBase],
  controllers: [SubSubCollectionController],
  providers: [SubSubCollectionService, SubSubCollectionResolver],
  exports: [SubSubCollectionService],
})
export class SubSubCollectionModule {}
