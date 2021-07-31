import React from "react";
import ClubInfo from "../components/Containers/ClubInfo/ClubInfo";

const Clubs = () => (
  <div>
    <ClubInfo
      tags={["technology", "science", "math"]}
      links={["http://example.org/", "http://example.org/", "http://example.org/"]}
    />
  </div>
);

export default Clubs;
