export const getHeaders = () => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  };
  return headers;
};
