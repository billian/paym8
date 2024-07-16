import { SubCollection as TSubCollection } from "../api/subCollection/SubCollection";

export const SUBCOLLECTION_TITLE_FIELD = "id";

export const SubCollectionTitle = (record: TSubCollection): string => {
  return record.id?.toString() || String(record.id);
};
