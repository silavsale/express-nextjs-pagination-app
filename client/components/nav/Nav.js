import React from "react"
import styles from "../../styles/Nav/Nav.module.css"
import { BiCameraMovie } from "react-icons/bi"
import { useRouter } from "next/router"
import ActiveLink from "../ActiveLink"

function Nav() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div id="nav" className={styles["nav-container"]}>
      <BiCameraMovie className={styles.logo}>Logo</BiCameraMovie>
      <div className={styles["nav-links"]}>
        <ActiveLink href={"/"}>Home</ActiveLink>
        <ActiveLink href={"/movies"}>Movies</ActiveLink>
        <ActiveLink href={"/movie"}>Movie</ActiveLink>
        <ActiveLink href={"/tvseries"}>Tv series</ActiveLink>
        <ActiveLink href={"/tvserie"}>Tv serie</ActiveLink>
        <ActiveLink href={"/favorites"}>Favorites</ActiveLink>
      </div>
    </div>
  )
}

export default Nav
