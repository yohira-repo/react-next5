import { Page1 } from "../Page1";
import { Page1DetalA } from "../Page1DetailA";
import { Page1DetalB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetalA />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetalB />
  }
];
