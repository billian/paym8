import { SubSubSubCollection as TSubSubSubCollection } from "../api/subSubSubCollection/SubSubSubCollection";

export const SUBSUBSUBCOLLECTION_TITLE_FIELD = "id";

export const SubSubSubCollectionTitle = (
  record: TSubSubSubCollection
): string => {
  return record.id?.toString() || String(record.id);
};
