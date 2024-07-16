import { TransactionFee as TTransactionFee } from "../api/transactionFee/TransactionFee";

export const TRANSACTIONFEE_TITLE_FIELD = "id";

export const TransactionFeeTitle = (record: TTransactionFee): string => {
  return record.id?.toString() || String(record.id);
};
