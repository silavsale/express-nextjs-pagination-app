import React, { useState } from "react"
import styles from "../../styles/Nav/Nav.module.css"
import { BiCameraMovie } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useRouter } from "next/router"
import ActiveLink from "../ActiveLink"

function NavMobile() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    // <div id="nav-mobile" className={styles["nav-mobile-container"]}>
    <div id="nav-mobile" className={styles["nav-mobile-container"]}>
      <BiCameraMovie className={styles.logo}>Logo</BiCameraMovie>
      {!hamburgerMenuOpen ? (
        <GiHamburgerMenu
          className={styles.hamburger}
          onClick={() => setHamburgerMenuOpen(true)}
        >
          Logo
        </GiHamburgerMenu>
      ) : (
        <AiOutlineClose
          className={styles.hamburger}
          onClick={() => setHamburgerMenuOpen(false)}
        >
          Logo
        </AiOutlineClose>
      )}
      {hamburgerMenuOpen && (
        <div className={styles["nav-mobile-links"]}>
          <ActiveLink href={"/"} className={styles["nav-mobile-link"]}>
            Home
          </ActiveLink>
          <ActiveLink href={"/movies"}>Movies</ActiveLink>
          <ActiveLink href={"/movie"}>Movie</ActiveLink>
          <ActiveLink href={"/tvseries"}>Tv series</ActiveLink>
          <ActiveLink href={"/tvserie"}>Tv serie</ActiveLink>
          <ActiveLink href={"/favorites"}>Favorites</ActiveLink>
        </div>
      )}
    </div>
  )
}

export default NavMobile
