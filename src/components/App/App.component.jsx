import './App.css';
import TopNav from '../TopNav/TopNav.component';
import Home from '../Home/Home.component';
import Sidebar from '../Sidebar/Sidebar.component';
import Content from '../Content/Content.component';

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Home />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
