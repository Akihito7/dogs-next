'use server'

import { Photos } from "../types/photos";

type PhotosGetProps = {
  user : 0 | string
}
export async function photosGet({ user } : PhotosGetProps){
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=${user}`, {
      next : {
        revalidate : 60,
        tags : ["photo"]
      }
    });
    const photos = await response.json() as Photos[]
    return photos;
}