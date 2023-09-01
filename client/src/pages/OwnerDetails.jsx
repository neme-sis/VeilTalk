import React, { useEffect } from "react";
import { ExampleNavbarOne } from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import OwnerDetailsHero from "../components/OwnerDetailsHero";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

const OwnerDetails = () => {
  const userId = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (!user_id) navigate("/");
    if (user_id && user_id !== userId) navigate("/", { replace: true });
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
