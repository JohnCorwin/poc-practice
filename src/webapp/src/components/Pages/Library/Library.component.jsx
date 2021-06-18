import React from "react";
import LibraryFilters from "../../Filters/LibraryFilters.component";
import LibraryContent from "../../Content/LibraryContent/LibraryContent.component";

import "../../../css/components/library.scss";

const Library = () => {
  return (
    <>
      <LibraryFilters />
      <LibraryContent />
    </>
  );
}

export default Library;