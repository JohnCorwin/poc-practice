import React from "react";
import EnrollmentFilters from "../Filters/EnrollmentFilters.component";
import EnrollmentContent from "../EnrollmentContent/EnrollmentContent.component";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

import "../../css/components/criteria.scss";

const EnrollmentCriteria = () => {
  return (
    <>
      <EnrollmentFilters />
      <EnrollmentContent />
    </>
  );
}

export default EnrollmentCriteria;