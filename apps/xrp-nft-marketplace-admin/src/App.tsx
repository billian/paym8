import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SubCollectionList } from "./subCollection/SubCollectionList";
import { SubCollectionCreate } from "./subCollection/SubCollectionCreate";
import { SubCollectionEdit } from "./subCollection/SubCollectionEdit";
import { SubCollectionShow } from "./subCollection/SubCollectionShow";
import { CollectionList } from "./collection/CollectionList";
import { CollectionCreate } from "./collection/CollectionCreate";
import { CollectionEdit } from "./collection/CollectionEdit";
import { CollectionShow } from "./collection/CollectionShow";
import { SubSubCollectionList } from "./subSubCollection/SubSubCollectionList";
import { SubSubCollectionCreate } from "./subSubCollection/SubSubCollectionCreate";
import { SubSubCollectionEdit } from "./subSubCollection/SubSubCollectionEdit";
import { SubSubCollectionShow } from "./subSubCollection/SubSubCollectionShow";
import { AuctionFeeList } from "./auctionFee/AuctionFeeList";
import { AuctionFeeCreate } from "./auctionFee/AuctionFeeCreate";
import { AuctionFeeEdit } from "./auctionFee/AuctionFeeEdit";
import { AuctionFeeShow } from "./auctionFee/AuctionFeeShow";
import { SubSubSubCollectionList } from "./subSubSubCollection/SubSubSubCollectionList";
import { SubSubSubCollectionCreate } from "./subSubSubCollection/SubSubSubCollectionCreate";
import { SubSubSubCollectionEdit } from "./subSubSubCollection/SubSubSubCollectionEdit";
import { SubSubSubCollectionShow } from "./subSubSubCollection/SubSubSubCollectionShow";
import { WalletList } from "./wallet/WalletList";
import { WalletCreate } from "./wallet/WalletCreate";
import { WalletEdit } from "./wallet/WalletEdit";
import { WalletShow } from "./wallet/WalletShow";
import { PaymentPercentageList } from "./paymentPercentage/PaymentPercentageList";
import { PaymentPercentageCreate } from "./paymentPercentage/PaymentPercentageCreate";
import { PaymentPercentageEdit } from "./paymentPercentage/PaymentPercentageEdit";
import { PaymentPercentageShow } from "./paymentPercentage/PaymentPercentageShow";
import { TransactionFeeList } from "./transactionFee/TransactionFeeList";
import { TransactionFeeCreate } from "./transactionFee/TransactionFeeCreate";
import { TransactionFeeEdit } from "./transactionFee/TransactionFeeEdit";
import { TransactionFeeShow } from "./transactionFee/TransactionFeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"XRP_NFT_Marketplace"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SubCollection"
          list={SubCollectionList}
          edit={SubCollectionEdit}
          create={SubCollectionCreate}
          show={SubCollectionShow}
        />
        <Resource
          name="Collection"
          list={CollectionList}
          edit={CollectionEdit}
          create={CollectionCreate}
          show={CollectionShow}
        />
        <Resource
          name="SubSubCollection"
          list={SubSubCollectionList}
          edit={SubSubCollectionEdit}
          create={SubSubCollectionCreate}
          show={SubSubCollectionShow}
        />
        <Resource
          name="AuctionFee"
          list={AuctionFeeList}
          edit={AuctionFeeEdit}
          create={AuctionFeeCreate}
          show={AuctionFeeShow}
        />
        <Resource
          name="SubSubSubCollection"
          list={SubSubSubCollectionList}
          edit={SubSubSubCollectionEdit}
          create={SubSubSubCollectionCreate}
          show={SubSubSubCollectionShow}
        />
        <Resource
          name="Wallet"
          list={WalletList}
          edit={WalletEdit}
          create={WalletCreate}
          show={WalletShow}
        />
        <Resource
          name="PaymentPercentage"
          list={PaymentPercentageList}
          edit={PaymentPercentageEdit}
          create={PaymentPercentageCreate}
          show={PaymentPercentageShow}
        />
        <Resource
          name="TransactionFee"
          list={TransactionFeeList}
          edit={TransactionFeeEdit}
          create={TransactionFeeCreate}
          show={TransactionFeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
