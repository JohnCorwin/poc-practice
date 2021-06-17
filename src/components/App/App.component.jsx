import './App.css';
import TopNav from '../TopNav/TopNav.component';
import Home from '../Home/Home.component';

import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Home />
    </div>
  );
}

export default App;
