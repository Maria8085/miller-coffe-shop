import Catalogs from "../pages/catalogs/catalogs";
import Main from "../pages/main/main";
import NoPage from "../pages/nopage/nopage";

export const router = {
  noPage: {
    path: "/error",
    element: <NoPage />,
  },
  main: {
    path: "/",
    element: <Main />,
  },
  catalogs: {
    path: "/catalogs",
    element: <Catalogs />,
  },
};
