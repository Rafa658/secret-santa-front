import './App.css';
import * as React from 'react'
import AddPersonBox from './components/AddPersonBox/AddPersonBox'
import ShowPeople from './components/ShowPeople/ShowPeople';
import DataContext from './components/Context/context';
import GenerateDraw from './components/GenerateDraw/GenerateDraw';

function App() {
  const [call, setCall] = React.useState(true)
  
  return (
    <div className="App">
      <header className="App-header">
        <GenerateDraw/>
        <DataContext.Provider value={{ call, setCall }}>
          <AddPersonBox />
          <ShowPeople />
        </DataContext.Provider>
      </header>
    </div>
  )
}

export default App;
