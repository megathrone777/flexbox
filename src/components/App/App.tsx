import React, { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotFound, Layout } from "~/components";
import { AppProvider } from "~/store";
import { theme } from "~/theme";

const HomePage: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/pages/Home")
);

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      path: "/",
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider {...{ theme }}>
      <AppProvider>
        <RouterProvider {...{ router }} />
      </AppProvider>
    </ThemeProvider>
  );
};

export { App };
