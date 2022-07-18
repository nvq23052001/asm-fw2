import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProps,
} from "react-router-dom";

import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import React, { Fragment } from "react";

function App() {
  const direct = publicRoutes.map((route, index) => {
    const Page = route.component;
    let Layout: any = DefaultLayout;

    if (route.layout === null) {
      Layout = Fragment;
    }
    if (route.layout) {
      Layout = route.layout;
    }

    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  });
  return (
    <Router>
      <Routes>{direct}</Routes>
    </Router>
  );
}

export default App;
