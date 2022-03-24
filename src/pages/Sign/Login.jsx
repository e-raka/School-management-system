import React, { useEffect } from 'react'

const Login = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [])
  return <h1>Login</h1>
}

export default Login
