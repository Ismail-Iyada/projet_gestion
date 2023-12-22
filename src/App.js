import Header from './components/header/Header';
import './App.css';
import './components/AddPerson/addPerson.css'
import './components/Login/login.css'
import Liste from './components/Liste/Liste';
import SideMenu from './components/side_menu/SideMenu';
import AddPerson from './components/AddPerson/AddPerson'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Map from './components/Map/Map'
import './assets/styling/responsiveCss.css'

function App() {

  const [logedState, setLogedState] = useState(false)
  console.log(logedState);

  const home = () => {
    return (
      <>
        <Header />
        <SideMenu logedState={logedState} setLogedState={setLogedState}/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/list' element={<Liste />} />
          <Route path='/addperson' element={<AddPerson />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </>
    )
  }

  return (
    <div className="App">
      {logedState ? home() : <Login logedState={logedState} setLogedState={setLogedState} />}
    </div>

  );
}

export default App;