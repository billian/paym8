import { AuctionFee as TAuctionFee } from "../api/auctionFee/AuctionFee";

export const AUCTIONFEE_TITLE_FIELD = "id";

export const AuctionFeeTitle = (record: TAuctionFee): string => {
  return record.id?.toString() || String(record.id);
};
