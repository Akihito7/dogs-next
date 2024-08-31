'use server'

import { Photos } from "../types/photos";

export async function photosGet(){
    const response = await fetch("https://dogsapi.origamid.dev/json/api/photo/?_page=1$_total=6$_user=0");
    const photos = await response.json() as Photos[]
    return photos;
}