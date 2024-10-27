//The sign-up page needs the following elements:
//connection with db
//auth() and userId
//a form to collect the user's profile data
//sql query to insert the user's data into the database
//we need to redirect the user to the homepage once they submit the profile form
//A suggestion: you could have a try and catch for your sql query

//currentUser is the current user logged in - you can import this from clerk???? ?

import { auth } from "@clerk/nextjs/server";

import pg from "pg";

export default async function CreateProfilePage({ params }) {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  });

  const { userId } = await auth();

  async function handleSubmit(formValues) {
    "use server";
    formValues = {
      username: formValues.get("username"),
      bio: formValues.get("bio"),
      interests: formValues.get("interests"),
    };
    console.log(formValues);

    await db.query(
      `INSERT INTO users (username, bio, interests, clerk_key) VALUES ($1, $2, $3, $4)`,
      [formValues.username, formValues.bio, formValues.interests, userId]
    );

    revalidatePath(`/createProfile`);
    redirect(`/user/${userId}`);
  }

  return (
    <>
      <h1>create profile</h1>

      <form action={handleSubmit} className="flex flex-col items-center p-10">
        <label htmlFor="Username">My username:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="bio">About me:</label>
        <input type="text" id="bio" name="bio" required />
        <label htmlFor="interests">Interests:</label>
        <input type="text" id="interests" name="interests" required />
        <button
          type="submit"
          className="border-green-400 border-4 bg-yellow-600 text-black-600 p-2 m-3"
        >
          Submit
        </button>
      </form>
    </>
  );
}
