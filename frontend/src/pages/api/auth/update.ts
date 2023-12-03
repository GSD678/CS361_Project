import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import { firestore} from "firebase-admin";
export const prerender = false;
export const POST: APIRoute = async ({ request, redirect }) => {
    const auth = getAuth(app);
    console.log("update")
    /* Get form data */
    const reqBody = await request.json();
    const email = reqBody.Email;
    const password = reqBody.Password;
    console.log(email, password)


    if (!email || !password) {
        return new Response(
            "Missing form data",
            { status: 400 }
        );
    }

    const UID = auth.getUserByEmail(email).then((userRecord) => {
        return userRecord.uid;
    } ).catch((error) => {
        console.log('Error fetching user data:', error);
    } );
    console.log(UID)
    /* Create user */
    try {

        const hh = await auth.updateUser(UID.toString(), {
            email: email,
            password: password,
        });
        firestore().collection("users").doc(email).set({ email: email, password: password });
    } catch (error: any) {
        return new Response(
            "Something went wrong",
            { status: 400 }
        );
    }
    return redirect("/account");
};