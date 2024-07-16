import { SubSubCollectionWhereInput } from "./SubSubCollectionWhereInput";
import { SubSubCollectionOrderByInput } from "./SubSubCollectionOrderByInput";

export type SubSubCollectionFindManyArgs = {
  where?: SubSubCollectionWhereInput;
  orderBy?: Array<SubSubCollectionOrderByInput>;
  skip?: number;
  take?: number;
};
