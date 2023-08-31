import React from "react";
import { ExampleNavbarOne } from "../components/NavBar";
import { useParams } from "react-router-dom";
import OwnerDetailsHero from "../components/OwnerDetailsHero";
import Comments from "../components/Comments"

const OwnerDetails = () => {
  const userId = useParams().id;
  return (
    <>
      <ExampleNavbarOne />
      <OwnerDetailsHero userId={userId} />
      <Comments userId={userId} />
    </>
  );
};

export default OwnerDetails;
