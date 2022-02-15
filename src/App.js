import React from "react";
import { Router, Link, Outlet } from "@redshelf/rs-js-utils-client";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const AboutInfo = React.lazy(() => import("./pages/AboutInfo"));
const AboutEdit = React.lazy(() => import("./pages/AboutEdit"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      <Router
        routes={[
          {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <Home /> },
              {
                path: "/about",
                element: <About />,
                children: [
                  { index: true, element: <AboutInfo /> },
                  {
                    path: "/about/info",
                    children: [{ path: ":id", element: <AboutInfo /> }],
                  },
                  { path: "/about/edit", element: <AboutEdit /> },
                ],
              },
              { path: "/dashboard", element: <Dashboard /> },
              { path: "*", element: <NoMatch /> },
            ],
          },
        ]}
      />
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
