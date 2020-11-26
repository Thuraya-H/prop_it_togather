import './App.css';
import PersonCard from './components/PersonCard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex justify-content-between">
        <PersonCard first_name={"Jane"} last_name={"Deo"} age={45} hair_color={"Black"} />
        <PersonCard first_name={"John"} last_name={"Smith"} age={88} hair_color={"Brown"} />
        <PersonCard first_name={"Millard"} last_name={"Fillmore"} age={50} hair_color={"Brown"} />
        <PersonCard first_name={"Maria"} last_name={"Smith"} age={62} hair_color={"Brown"} />
    </div>
  );
}

export default App;
