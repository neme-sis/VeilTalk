import React, { useEffect } from "react";
import { ExampleNavbarOne } from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import OwnerDetailsHero from "../components/OwnerDetailsHero";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import { getUser } from "../actions/getUser";

const OwnerDetails = () => {
  const userId = useParams().id;
  const navigate = useNavigate();

  async function init() {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) navigate("/", { replace: true });
    if (user_id !== userId) navigate("/", { replace: true });

    const existingUser = await getUser(userId);
    if (!existingUser) {
      navigate("/", { replace: true });
      localStorage.removeItem("user_id");
    }
  }

  useEffect(() => {
    init();
  }, [localStorage.getItem("user_id"), userId]);
  return (
    <>
      <ExampleNavbarOne />
      <OwnerDetailsHero userId={userId} />
      <Comments userId={userId} />
      <Footer />
    </>
  );
};

export default OwnerDetails;
