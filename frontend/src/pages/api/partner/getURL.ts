import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {

    let corsHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600'
    };

    if (request.method === "OPTIONS") {
        return new Response(null, {
            headers: corsHeaders,
            status: 204
        });
    }

    let reqData = await request.json();
    let front = reqData["frontend"];
    let back = reqData["backend"];
    let database = reqData["database"];
    let styling = reqData["styling"];
    let deployment = reqData["deployment"];

    let frontendObject = {name: "", url: ""};
    let backendObject = {name: "", url: ""};
    let databaseObject = {name: "", url: ""};
    let stylingObject = {name: "", url: ""};
    let deploymentObject = {name: "", url: ""};

    let {data:frontendData, error: frontendURLERROR} = await supabase.from("frontend_technologies").select('name, url').eq('id', front);
    if (frontendData) {
         frontendObject = frontendData[0];
    }

    let {data:backendData, error: backendURLERROR } = await supabase.from("backend_technologies").select('name, url').eq('id', back);

    if (backendData) {
         backendObject = backendData[0];
    }

    let {data:databaseData, error: databaseURLERROR} = await supabase.from("databases").select('name, url').eq('id', database);

    if (databaseData) {
        databaseObject = databaseData[0];
    }

    let {data:stylingData, error: stylingURLERROR} = await supabase.from("styling_libraries").select('name, url').eq('id', styling);

    if (stylingData) {
        stylingObject = stylingData[0];
    }

    let {data:deploymentData, error: deploymentURLERROR} = await supabase.from("deployment").select('name, url').eq('id', deployment);

    if (deploymentData) {
         deploymentObject = deploymentData[0];
    }

    let responseObj = {
        [frontendObject.name]: frontendObject.url,
        [backendObject.name]: backendObject.url,
        [databaseObject.name]: databaseObject.url,
        [stylingObject.name]: stylingObject.url,
        [deploymentObject.name]: deploymentObject.url
    };

    let responseOptions = {
        headers: corsHeaders
    };

    return new Response(JSON.stringify(responseObj), responseOptions);


}
