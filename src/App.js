import './App.css';
import AddPersonBox from './components/AddPersonBox/AddPersonBox'
import ShowPeople from './components/ShowPeople/ShowPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddPersonBox/>
        <ShowPeople/>
      </header>
    </div>
  )
}

export default App;
