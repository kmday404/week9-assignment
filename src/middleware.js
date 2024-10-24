//set up your middleware using clerk's template
//you dont need to write the template yourself - you only write the logic to make some routes protected and some routes public

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//I am going to set up a public route (home) and a protected route (posts)
//We need to give the matcher, something to match -- give the matcher a match for protected routes
//we need to write the match in regex
//you can add as many matches in [] as you want

const isProtectedRoute = createRouteMatcher(["/posts(.*)"]);

//we are going to use clerkmiddleware to put together the matches and the matcher
//if the protected route match is in the request, protect with authentication
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [],
};
