import { RsLink } from "@redshelf/rs-js-utils-client";

export default function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <RsLink to="/">Go to the home page</RsLink>
      </p>
    </div>
  );
}
