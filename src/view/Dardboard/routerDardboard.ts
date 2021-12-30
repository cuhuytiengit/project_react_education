import { IRouter } from "@routers/interface";

export const routerDardboard: IRouter = {
  path: "/dardboard",
  loader: import("./dardboard"),
  exact: true,
};
