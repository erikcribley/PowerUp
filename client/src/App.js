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
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/stats" component={StatsPage} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/gameplay" component={Gameplay} />
      </div>
    </Router>
  )
}

export default App