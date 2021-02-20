import React, { Component } from 'react'
import './App.css';

import {
  Container,
  Row,
} from 'reactstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import MainNav from './Components/MainNav/index'
import UploadForm from './Pages/UploadForm'
import ProductCatalog from './Pages/ProductCatalog'

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Container>
          <Row>
            <Switch>
              <Route path="/product-catalog">
                <ProductCatalog />
              </Route>
              <Route path="/upload-product">
                <UploadForm />
              </Route>
              <Route path="/">
                <h1>Hola, soy la vista "home"</h1>
              </Route>
            </Switch>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;