import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { UserContext } from "../contexts/user.context"


function HomePage() {

  const {user} = useContext(UserContext);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>HomePage</div>
      <h2>Soy el usuario: {user}</h2>
    </>
  )
}

export default HomePage