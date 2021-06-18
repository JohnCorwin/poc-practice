import React from "react";
import ConnectFilters from "../../Filters/ConnectFilters.component";
import ConnectContent from "../../Content/ConnectContent/ConnectContent.component";

import "../../../css/components/connect.scss";

const Connect = () => {


  return (
    <>
      <ConnectFilters />
      <ConnectContent />
    </>
  );
}

export default Connect;