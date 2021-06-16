import collegeLogo from './JohnsHopkinsUniversityLogo.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="college-logo" alt="College Logo" src={collegeLogo}></img>
      <ul className="sidebar-nav">
        <li>
          <h3 className="sidebar-nav-item">RECRUITMENT</h3>
          <ul>
            <li><a href="/campaigns" className="sidebar-button">Campaigns</a></li>
            <li><a href="/discover" className="sidebar-button">Discover</a></li>
            <li><a href="/social-tools" className="sidebar-button">Social Tools</a></li>
            <li><a href="/criteria" className="sidebar-button">Criteria</a></li>
          </ul>
        </li>
        <li>
          <h3 className="sidebar-nav-item">ENGAGEMENT</h3>
          <ul>
            <li><a href="/connect" className="sidebar-button">Connect</a></li>
            <li><a href="/library" className="sidebar-button">Library</a></li>
            <li><a href="/analytics" className="sidebar-button">Analytics</a></li>
          </ul>
        </li>
        <li><h3 className="sidebar-nav-item">ENROLLMENT</h3>
          <ul>
            <li><a href="/students" className="sidebar-button">Students</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
