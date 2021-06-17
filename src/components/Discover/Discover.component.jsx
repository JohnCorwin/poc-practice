import DiscoverFilters from '../Filters/DiscoverFilters.component';
import Dots from '../Dots/Dots.component';
import Maps from '../Maps/Maps.component';

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

import "../../css/components/discover.scss";

const Discover = () => {
  return (
    <>
      <DiscoverFilters />
      <Dots />
      <Maps />
    </>
  );
}

export default Discover;
