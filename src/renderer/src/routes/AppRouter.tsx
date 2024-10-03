import DashboardPage from "@renderer/pages/dashboard/DashboardPage";
import LoginPage from "@renderer/pages/login/LoginPage";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const MainRouter = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<DashboardPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
