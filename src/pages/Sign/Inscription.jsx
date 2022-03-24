import React, { useEffect } from 'react'

const Inscription = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [])
  return <h1>Inscription</h1>
}

export default Inscription
