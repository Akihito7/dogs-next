'use server'

import apiError from "../functions/api-error";

export async function photoGet(id: string) {
    try {
        if (!id) throw new Error("Post deletado");
        const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`);
        const data = await response.json();
        if (!response.ok) {
            if (data.message) {
                throw new Error(data.message)
            } else throw new Error("INTERNAL ERROR SERVER")
        }
        return data;
    } catch (error) {
        return apiError(error)
    }
}