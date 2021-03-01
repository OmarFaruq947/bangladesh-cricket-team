import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Persons from './component/persons_panel/persons';
import Header from './component/header/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Persons></Persons>
    </div>
  );
}
export default App;
