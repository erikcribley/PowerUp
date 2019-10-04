import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./pages/Login"
import Characters from "./pages/Characters"
import StatsPage from "./pages/Stats"
import Tasks from "./pages/Tasks"
import Store from "./pages/Store"
import Gameplay from "./pages/Gameplay"
import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className='main-container'>
          <Route exact path="/" component={Login} />
          <Route exact path="/Characters" component={Characters} />
          <Route exact path="/Stats" component={StatsPage} />
          <Route exact path="/Tasks" component={Tasks} />
          <Route exact path="/Store" component={Store} />
          <Route exact path="/Gameplay" component={Gameplay} />
      </div>
    </Router>
  )
}

export default App