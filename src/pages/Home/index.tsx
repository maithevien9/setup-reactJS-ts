import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { Wrapper } from "./style";

const Home: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div>Home Page</div>
      <FontAwesomeIcon icon={faCoffee} />
    </Wrapper>
  );
};

export default Home;
