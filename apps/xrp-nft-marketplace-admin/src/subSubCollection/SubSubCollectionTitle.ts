import { SubSubCollection as TSubSubCollection } from "../api/subSubCollection/SubSubCollection";

export const SUBSUBCOLLECTION_TITLE_FIELD = "id";

export const SubSubCollectionTitle = (record: TSubSubCollection): string => {
  return record.id?.toString() || String(record.id);
};
