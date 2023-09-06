import { ownerApi } from "../apis";
import { getHeaders } from "./headerHelper";

export const getComments = async () => {
    const id = localStorage.getItem("user_id");
    if (!id) return;
    const headers = getHeaders();
    try {
        const response = await ownerApi.get(`/comments?user_id=${id}`, headers);
        if (response.data.code === 200) {
        const resp = response.data.model;
        return resp;
        } else throw new Error(response.data.message);
    } catch (err) {
        console.log(err);
    }
}