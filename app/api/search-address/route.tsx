import { NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request: any) {

    const { searchParams } = new URL(request.url);

    const searchText = searchParams.get('q');

    const apiUrl = BASE_URL + '?q=' + searchText + '?language=en&limit=6&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363'
        + "&access_token=" + process.env.MAPBOX_ACCESS_TOKEN

    const res = await fetch(apiUrl, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log("Response Headers:", res.headers);

    const searchResult = await res.json();
    console.log("Response Content:", searchResult);

    return NextResponse.json(searchResult);
}