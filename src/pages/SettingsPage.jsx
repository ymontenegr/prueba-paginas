import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { Navigate } from 'react-router-dom';

function SettingsPage() {

    const [hasAccess, setAccess] = useState(false);

    if (!hasAccess) return <Navigate to={"/error"}></Navigate>

  return (
    <>
    <HeaderComponent></HeaderComponent>

    <div>SettingsPage</div>

    </>
  )
}

export default SettingsPage