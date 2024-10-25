// // import auth
// //currentUser - an element from clerk

// import { userAgent } from "next/server";

// export default async function UserPage() {
//   // const user = await currentUser();
//   return (
//     <>
//       <h1>User page</h1>
//       <h2>
//         Welcome, {user?.firstName} {user?.lastName}
//       </h2>
//       <p>{user?.emailAdresses[0].emailAddresses}</p>
//     </>
//   );
// }

// "use client";
// import { useAuth } from "@clerk/nextjs";

// export default function UserPage({ params }) {
//   const { isLoaded, userId, sessionId } = useAuth();

//   // In case the user signs out while on the page.
//   if (!isLoaded || !userId) {
//     return null;
//   }

//   return (
//     <div>
//       Hello, {userId} your current active session is {sessionId}
//     </div>
//   );
// }

"use client";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div>Hello, {user.firstName} welcome to my nightmare</div>;
}
