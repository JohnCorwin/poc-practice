import DiscoverFilters from '../Filters/DiscoverFilters.component';
import Dots from '../Dots/Dots.component';
import Maps from '../Maps/Maps.component';

import socialFeed from "../../assets/images/socialfeed.svg";
import socialProof from "../../assets/images/socialproof.svg";

const SocialContent = () => {
  return (
    <>
      <div className="stuff">
        <h1>Active Social Content</h1>
        <p>Currently running social content for all potential students in East China interested in Medicine.</p>
        <div className="cards">
          <div className="card">
            <img src={socialFeed}></img>
          </div>
          <div className="card">
            <img src={socialProof}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialContent;
