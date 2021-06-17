import SocialFilters from '../Filters/SocialFilters.component';
import SocialContent from '../SocialContent/SocialContent.component';

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";
import "../../css/components/socialtool.scss";

const SocialTools = () => {
  return (
    <>
      <SocialFilters />
      <SocialContent />
    </>
  );
}

export default SocialTools;
