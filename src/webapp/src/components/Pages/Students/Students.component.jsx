import React from "react";
import StudentsFilters from "../../Filters/StudentsFilters.component";
import StudentsContent from "../../Content/StudentsContent/StudentsContent.component";

import "../../../css/components/students.scss";

const Students = () => {
  return (
    <>
      <StudentsFilters />
      <StudentsContent />
    </>
  );
}

export default Students;