import "./HomePage.scss"
import Navigation from "../../UiComponents/organism/Navigation/Navigation"
import Calculator from "../../UiComponents/organism/Calculator/Calculator"
import ButtonShell from "../../UiComponents/atom/ButtonShell/ButtonShell"
import { motion, AnimatePresence } from "framer-motion"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const deviceAnimation = {
  open: {
    right: "130px",
    transform: ["rotate(-20deg)", "rotate(0deg)"],
    opacity: 1,
  },
  closed: {
    width: "0%",
  },
}

function HomePage() {
  // const counter = useSelector((state: any) => state.counter)
  // console.log(counter)

  return (
    <>
      <Navigation />
      <div className="homepage">homepage</div>
    </>
  )
}

export default HomePage
