import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Persons from './component/persons_panel/persons';
import Header from './component/header/header';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      {/* <div className="hederName text-primary">
        <p>bangladesh cricket team players</p>
      </div> */}
     
      <Persons></Persons>
    </div>
  );
}

export default App;
