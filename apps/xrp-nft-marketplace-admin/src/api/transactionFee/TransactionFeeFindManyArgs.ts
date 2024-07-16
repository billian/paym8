import { TransactionFeeWhereInput } from "./TransactionFeeWhereInput";
import { TransactionFeeOrderByInput } from "./TransactionFeeOrderByInput";

export type TransactionFeeFindManyArgs = {
  where?: TransactionFeeWhereInput;
  orderBy?: Array<TransactionFeeOrderByInput>;
  skip?: number;
  take?: number;
};
