import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Form';
import About from './components/About'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if (mode === 'light')
    {setMode ('dark')
  document.body.style.backgroundColor = "#192640"
  showAlert("Dark mode enable","Success")}
  else {
    setMode ('light')
    document.body.style.backgroundColor = "#e0fffc"
    showAlert("Light mode enable", "Success")
  }}
  return (
    <>
    <Router>
    <Alert alert={alert}/>
      <Navbar mode={mode} toggleMode={toggleMode}/>
        <div className="container">
        <Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Text showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </Route>
     </Switch>
         
        </div>
        </Router>
    </>
 
  );
}

export default App;
