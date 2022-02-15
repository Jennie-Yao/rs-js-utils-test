import { Outlet, Link, useParams, useLocation } from "@redshelf/rs-js-utils-client";

export default function AboutInfo() {
  const { id } = useParams();
  return (
    <div>
      <h2>About - info - {id}</h2>
    </div>
  );
}