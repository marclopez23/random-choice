import React from "react";
import PlatformCard from "../../components/PlatformCard/PlatformCard";

const Main = ({ platforms }) => {
  console.log(platforms);
  return (
    <main>
      {platforms.map((platform, idx) => (
        <PlatformCard info={platform} key={platform.platform + idx} />
      ))}
    </main>
  );
};

export default Main;
