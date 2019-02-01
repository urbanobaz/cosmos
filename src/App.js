import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import './Nav.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="Navbar container">
          <NavbarBrand>
            <img src="https://img.icons8.com/small/16/000000/apricot.png" alt='peach' />
            Cosmos
          </NavbarBrand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Receipes</Nav.Link>
            <Nav.Link className='Nav'>About</Nav.Link>
          </Nav>
        </Navbar>
        <div className='container'>
          <div class="flex mt5">
            <div class="outline w-25 pa3 mr2">
              <code>1</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>2</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>3</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>4</code>
            </div>
            <div class="outline w-25 pa3">
              <code>5</code>
            </div>
          </div>
          <div class="flex mt5">
            <div class="outline w-25 pa3 mr2">
              <code>1</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>2</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>3</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>4</code>
            </div>
            <div class="outline w-25 pa3">
              <code>5</code>
            </div>
          </div>
          <div class="flex mt5">
            <div class="outline w-25 pa3 mr2">
              <code>1</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>2</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>3</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>4</code>
            </div>
            <div class="outline w-25 pa3">
              <code>5</code>
            </div>
          </div>
          <div class="flex flex-column mt5">
            <div class="outline w-25 pa3 mr2">
              <code>1</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>2</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>3</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>4</code>
            </div>
            <div class="outline w-25 pa3">
              <code>5</code>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
