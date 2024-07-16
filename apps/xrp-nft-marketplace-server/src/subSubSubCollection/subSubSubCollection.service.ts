import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubSubSubCollectionServiceBase } from "./base/subSubSubCollection.service.base";

@Injectable()
export class SubSubSubCollectionService extends SubSubSubCollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
