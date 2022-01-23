import React from "react"
import styles from "../styles/Nav.module.css"
import { BiCameraMovie } from "react-icons/bi"
import { useRouter } from "next/router"
import ActiveLink from "./ActiveLink"

function Nav() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className={styles["nav-container"]}>
      <BiCameraMovie className={styles.logo}>Logo</BiCameraMovie>
      <div className={styles["nav-links"]}>
        <ActiveLink href={"/"} className={styles["nav-link"]}>
          Home
        </ActiveLink>
        <ActiveLink href={"/movies"} className={styles["nav-link"]}>
          Movies
        </ActiveLink>
        <ActiveLink href={"/movie"} className={styles["nav-link"]}>
          Movie
        </ActiveLink>
        <ActiveLink href={"/tvseries"} className={styles["nav-link"]}>
          Tv series
        </ActiveLink>
        <ActiveLink href={"/tvserie"} className={styles["nav-link"]}>
          Tv serie
        </ActiveLink>
        <ActiveLink href={"/favorites"} className={styles["nav-link"]}>
          Favorites
        </ActiveLink>
      </div>
    </div>
  )
}

export default Nav
