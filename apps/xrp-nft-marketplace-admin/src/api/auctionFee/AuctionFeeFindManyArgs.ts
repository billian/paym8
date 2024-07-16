import { AuctionFeeWhereInput } from "./AuctionFeeWhereInput";
import { AuctionFeeOrderByInput } from "./AuctionFeeOrderByInput";

export type AuctionFeeFindManyArgs = {
  where?: AuctionFeeWhereInput;
  orderBy?: Array<AuctionFeeOrderByInput>;
  skip?: number;
  take?: number;
};
