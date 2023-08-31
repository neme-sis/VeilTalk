import { ownerApi } from "../apis";

export const addUser = async ({ name, email }) => {
  try {
    const response = await ownerApi.post(`/register-user`, {
      name,
      email,
    });
    if (response.data.code === 200) {
      const resp = response.data.model;
      if (resp.user_id) localStorage.setItem("user_id", resp.user_id);
      return resp;
    } else throw new Error(response.data.message);
  } catch (err) {
    console.log(err);
  }
};
