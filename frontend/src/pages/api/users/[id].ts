import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";


const db = getFirestore(app);
const usersRef = db.collection("users");

export const POST: APIRoute = async ({ redirect, request }) => {
    const reqBody = await request.json();
    const name = reqBody.Name;
    const address = reqBody.Address;
    const password = reqBody.Password;
    const email = reqBody.Email;

    console.log(reqBody);

    try {
            await usersRef.doc(email).update({
                name: name,
                address: address,
                password: password,
                email: email
            });

    } catch (error) {
        return new Response("Something went wrong", {
            status: 500,
        });
    }
    return new Response("Success", {status: 200});
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
    if (!params.id) {
        return new Response("Cannot find friend", {
            status: 404,
        });
    }

    try {
        await usersRef.doc(params.id).delete();
    } catch (error) {
        return new Response("Something went wrong", {
            status: 500,
        });
    }
    return redirect("/dashboard");
};