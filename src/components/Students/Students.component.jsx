import React from "react";
import StudentsFilters from "../Filters/StudentsFilters.component";
import StudentsContent from "../StudentsContent/StudentsContent.component";

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

import "../../css/components/students.scss";

const Students = () => {
  return (
    <>
      <StudentsFilters />
      <StudentsContent />
    </>
  );
}

export default Students;