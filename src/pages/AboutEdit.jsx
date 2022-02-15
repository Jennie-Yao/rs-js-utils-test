import { Outlet, Link, useParams, useLocation } from "@redshelf/rs-js-utils-client";

export default function AboutEdit() {
  const query = useLocation().search;

  return (
    <div>
      <h2>About-edit-{query}</h2>
    </div>
  );
}