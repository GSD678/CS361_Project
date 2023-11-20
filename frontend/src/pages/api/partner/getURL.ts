import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
    let reqData = await request.json();
    let front = reqData["frontend"];
    let back = reqData["backend"];
    let database = reqData["database"];
    let styling = reqData["styling"];
    let deployment = reqData["deployment"];

    let {data:frontendData, error: frontendURLERROR} = await supabase.from("frontend_technologies").select('name, url').eq('id', front);
    // @ts-ignore
    let frontendObject = frontendData[0];

    let {data:backendData, error: backendURLERROR } = await supabase.from("backend_technologies").select('name, url').eq('id', back);
    // @ts-ignore
    let backendObject = backendData[0];

    let {data:databaseData, error: databaseURLERROR} = await supabase.from("databases").select('name, url').eq('id', database);
    // @ts-ignore
    let databaseObject = databaseData[0];

    let {data:stylingData, error: stylingURLERROR} = await supabase.from("styling_libraries").select('name, url').eq('id', styling);
    // @ts-ignore
    let stylingObject = stylingData[0];

    let {data:deploymentData, error: deploymentURLERROR} = await supabase.from("deployment").select('name, url').eq('id', deployment);
    // @ts-ignore
    let deploymentObject = deploymentData[0];

    let responseObj = {
        [frontendObject.name]: frontendObject.url,
        [backendObject.name]: backendObject.url,
        [databaseObject.name]: databaseObject.url,
        [stylingObject.name]: stylingObject.url,
        [deploymentObject.name]: deploymentObject.url
    };

    let responseOptions = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return new Response(JSON.stringify(responseObj), responseOptions);


}
