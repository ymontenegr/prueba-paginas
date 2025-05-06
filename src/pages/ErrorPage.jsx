import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <section id="error-page">
        <h1>ERROR YMM</h1>
        <h2>Página inaccesible</h2>
        <Link to="/">Ir a Home</Link>
    </section>
  )
}

export default ErrorPage