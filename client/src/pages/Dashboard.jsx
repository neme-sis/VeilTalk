import React, { useEffect } from "react";
import { TopDialog } from "../components/TopDialog";
import { ExampleNavbarOne } from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_id"))
      navigate("/user/" + localStorage.getItem("user_id") + "/comments", {
        replace: true,
      });
  }, [localStorage.getItem("user_id")]);
  return (
    <>
      <ExampleNavbarOne />
      <TopDialog />
      <Footer />
    </>
  );
};

export default Dashboard;
