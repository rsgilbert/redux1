// hoc - higher order component
       // - a component that renders another component
       // - reuse combineReducers
       // - Render hijacking
       // - Prop manipulation
       // - Abstract state
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
  return (
    <div>
      <h1>My info</h1>
      <p>The propsa : {props.info} </p>
    </div>
  )
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private stuff</p> }
      <WrappedComponent { ... props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>Auth data</p>
      { props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> Please login </p>
      ) }
    </div>
  )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="my badass" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={ true } info="my password is dlks" />, document.getElementById('app'))
