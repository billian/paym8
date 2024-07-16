import { SubCollectionWhereInput } from "./SubCollectionWhereInput";
import { SubCollectionOrderByInput } from "./SubCollectionOrderByInput";

export type SubCollectionFindManyArgs = {
  where?: SubCollectionWhereInput;
  orderBy?: Array<SubCollectionOrderByInput>;
  skip?: number;
  take?: number;
};
