import React from "react"
import styles from "../styles/Nav.module.css"
import { BiCameraMovie } from "react-icons/bi"
import { useRouter } from "next/router"
import ActiveLink from "../components/ActiveLink"
import Nav from "../components/Nav"

function Movies() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div>
      <Nav />
      Movies
    </div>
  )
}

export default Movies
