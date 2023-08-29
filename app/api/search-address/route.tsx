import { request } from "http";
import { NextResponse } from "next/server";

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest'

export async function GET(request: any) {

    const { searchParams } = new URL(request.url)
    const searchText = searchParams.get('q')

    const res = await fetch(BASE_URL + '?q=' + searchText + '?language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US')
    return NextResponse.json({ data: searchText })
}