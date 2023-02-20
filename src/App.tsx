import {Routes, Route} from 'react-router-dom';
import './App.css'
import Sidebar from './components/Sidebar/Index';
import Buttons from './views/Buttons';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="nav-section">
          <Sidebar/>
        </div>
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Buttons/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
