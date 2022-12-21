import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import '../src/css/main.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default App;
