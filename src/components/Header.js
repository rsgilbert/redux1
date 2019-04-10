import React from 'react'
import { NavLink,  } from 'react-router-dom'


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Go to edit page</NavLink>
    <NavLink to="/help" activeClassName="is-active">Ask for help</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create sth</NavLink>
  </header>
)

export default Header
