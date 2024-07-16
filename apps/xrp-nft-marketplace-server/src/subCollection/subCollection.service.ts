import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubCollectionServiceBase } from "./base/subCollection.service.base";

@Injectable()
export class SubCollectionService extends SubCollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
