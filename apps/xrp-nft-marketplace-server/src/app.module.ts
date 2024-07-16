import { Module } from "@nestjs/common";
import { SubCollectionModule } from "./subCollection/subCollection.module";
import { CollectionModule } from "./collection/collection.module";
import { SubSubCollectionModule } from "./subSubCollection/subSubCollection.module";
import { AuctionFeeModule } from "./auctionFee/auctionFee.module";
import { SubSubSubCollectionModule } from "./subSubSubCollection/subSubSubCollection.module";
import { WalletModule } from "./wallet/wallet.module";
import { PaymentPercentageModule } from "./paymentPercentage/paymentPercentage.module";
import { TransactionFeeModule } from "./transactionFee/transactionFee.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SubCollectionModule,
    CollectionModule,
    SubSubCollectionModule,
    AuctionFeeModule,
    SubSubSubCollectionModule,
    WalletModule,
    PaymentPercentageModule,
    TransactionFeeModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
