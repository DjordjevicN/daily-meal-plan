import "./HomePage.scss"
import Navigation from "../../UiComponents/organism/Navigation/Navigation"
import { useSelector } from "react-redux"

function HomePage() {
  const counter = useSelector((state: any) => state.test)

  return (
    <>
      <Navigation />
      <h1>{counter.value}</h1>
      <div className="homepage">homepage</div>
    </>
  )
}

export default HomePage
