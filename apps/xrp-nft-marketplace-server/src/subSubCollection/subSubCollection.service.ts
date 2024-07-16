import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubSubCollectionServiceBase } from "./base/subSubCollection.service.base";

@Injectable()
export class SubSubCollectionService extends SubSubCollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
