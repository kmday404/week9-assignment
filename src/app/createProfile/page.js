//The sign-up page needs the following elements:
//connection with db
//auth() and userId
//a form to collect the user's profile data
//sql query to insert the user's data into the database
//we need to redirect the user to the homepage once they submit the profile form
//A suggestion: you could have a try and catch for your sql query

//currentUser is the current user logged in - you can import this from clerk???? ?

import { currentUser } from "@clerk/nextjs/server";

import pg from "pg";

export default async function CreateProfilePage({ params }) {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  });

  await db.query(`INSERT INTO users (username, clerk_key) VALUES ($1, $2)`, [
    currentUser.username,
    currentUser.id,
  ]);
  // revalidatePath(`/`);
  // redirect(`/`);
  console.log(currentUser.id);

  return (
    <>
      <h1>create profile</h1>
    </>
  );
}
