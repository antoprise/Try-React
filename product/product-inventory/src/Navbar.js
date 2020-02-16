import React from 'react';

const NavBar = (props) => {
    return (
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href="#">
            <span style = {{color: 'pink'}}>{props.name}</span>
        </a>
        <a class="navbar-brand" href="#">
            <span style = {{color: 'pink'}}></span>
        </a>
        <p></p>
      </nav>)
  }

  export default NavBar;