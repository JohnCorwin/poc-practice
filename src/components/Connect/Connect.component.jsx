import React from "react";
import ConnectFilters from "../Filters/ConnectFilters.component";
import ConnectContent from "../ConnectContent/ConnectContent.component";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

import "../../css/components/connect.scss";

const Connect = () => {


  return (
    <>
      <ConnectFilters />
      <ConnectContent />
    </>
  );
}

export default Connect;