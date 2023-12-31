import { userApi } from "../apis";

export const postMessage = async (id, comment) => {
  if (!id) return;
  try {
    const response = await userApi.post(`/comment`, {
      user_id: id,
      comment,
    });
    if (response.data.code === 200) {
      const resp = response.data.model;
      return resp;
    } else throw new Error(response.data.message);
  } catch (err) {
    console.log(err);
  }
};
