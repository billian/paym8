import { PaymentPercentage as TPaymentPercentage } from "../api/paymentPercentage/PaymentPercentage";

export const PAYMENTPERCENTAGE_TITLE_FIELD = "id";

export const PaymentPercentageTitle = (record: TPaymentPercentage): string => {
  return record.id?.toString() || String(record.id);
};
