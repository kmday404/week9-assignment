// import auth
//currentUser - an element from clerk

import { userAgent } from "next/server";

export default async function UserPage() {
  // const user = await currentUser();
  return (
    <>
      <h1>User page</h1>
      <h2>
        Welcome, {user.firstName} {user.lastName}
      </h2>
      <p>{user.emailAdresses[0].emailAddresses}</p>
    </>
  );
}
