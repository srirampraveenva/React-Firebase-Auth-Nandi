import React from "react"
import Signup from "./Signup"
import Logo from "./Logo"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
    <h1 className="text-center">NANDI TOYOTA</h1>
    <Container
      className="d-flex align-items-center justify-content-center"
    >
      <div className="d-none d-md-block w-100" style={{ maxWidth: "600px", }}><Logo/></div> 
      <div className="w-100" style={{ maxWidth: "400px" }}>
        
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </Container>
  )
}

export default App
