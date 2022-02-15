import { Link, Outlet } from "@redshelf/rs-js-utils-client";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/about/info/${new Date().valueOf()}`}>info</Link>
          </li>
          <li>
            <Link to={`/about/edit?id=${new Date().valueOf()}`}>edit</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}