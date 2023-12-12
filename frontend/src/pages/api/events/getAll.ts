import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const GET: APIRoute = async ({ request, redirect }) => {
    const db = getFirestore(app);
    const eventsRef = db.collection("events");
    const snapshot = await eventsRef.get();
    const events: any[] = [];
    snapshot.forEach((doc) => {
        events.push(doc.data());
    });
    //return JSON response with events
    return new Response(JSON.stringify(events), { headers: { "content-type": "application/json" } });
};