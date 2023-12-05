import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import {firestore} from "firebase-admin";

export const POST: APIRoute = async ({ request, redirect }) => {
    const auth = getAuth(app);

    /* Get form data */
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();


    if (!email || !password) {
        return new Response(
            "Missing form data",
            { status: 400 }
        );
    }

    /* Create user */
    try {
        await auth.createUser({
            email,
            password,
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