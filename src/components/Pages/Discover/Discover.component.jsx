import DiscoverFilters from '../../Filters/DiscoverFilters.component';
import DiscoverContent from '../../Content/DiscoverContent/DiscoverContent.component';

import "../../../css/baseline/project.scss";
import "../../../css/baseline/reset.scss";

import "../../../css/components/discover.scss";

const Discover = () => {
  return (
    <>
      <DiscoverFilters />
      <DiscoverContent />
    </>
  );
}

export default Discover;
