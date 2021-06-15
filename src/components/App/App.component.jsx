import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header.component';
import Sidebar from '../Sidebar/Sidebar.component';
import Content from '../Content/Content.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
