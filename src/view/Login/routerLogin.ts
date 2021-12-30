import { IRouter } from "@routers/interface";

export const routerMainPublicPage = {
  path: "/",
  loader: import("@view/Login"),
  exact: true,
};

export const routerLogin: IRouter = {
  path: "/login",
  loader: import("./index"),
  exact: true,
  routes: [
    {
      path: "/forgotpass",
      loader: import("./ForgotPass"),
      exact: true,
    },
  ],
};

export const routerdardboard = {
  path: "/Dardboard",
  loader: import("@view/Dardboard/dardboard"),
  exact: true,
};
