import { PaymentPercentageWhereInput } from "./PaymentPercentageWhereInput";
import { PaymentPercentageOrderByInput } from "./PaymentPercentageOrderByInput";

export type PaymentPercentageFindManyArgs = {
  where?: PaymentPercentageWhereInput;
  orderBy?: Array<PaymentPercentageOrderByInput>;
  skip?: number;
  take?: number;
};
