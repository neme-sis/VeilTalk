export const getUserWithComments = async () => {
    const id = localStorage.getItem("user_id");
    if (!id) return;
    try {
        const response = await ownerApi.get(`/all-info?user_id=${id}`);
        if (response.data.code === 200) {
        const resp = response.data.model;
        return resp;
        } else throw new Error(response.data.message);
    } catch (err) {
        console.log(err);
    }
}