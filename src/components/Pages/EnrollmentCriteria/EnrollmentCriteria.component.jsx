import React from "react";
import EnrollmentFilters from "../../Filters/EnrollmentFilters.component";
import EnrollmentContent from "../../Content/EnrollmentContent/EnrollmentContent.component";

import "../../../css/components/criteria.scss";

const EnrollmentCriteria = () => {
  return (
    <>
      <EnrollmentFilters />
      <EnrollmentContent />
    </>
  );
}

export default EnrollmentCriteria;