import React from "react"
import Nav from "../components/nav/Nav"
import NavMobile from "../components/nav/NavMobile"
import Movies from "../components/movies/Movies"
import LoadingDots from "../components/LoadingDots"

function MoviesPage() {
  return (
    <div>
      <div>
        {/* <Nav />
        <NavMobile /> */}
      </div>
      {/* <Movies /> */}
      {/* <div>Movies</div> */}
      <LoadingDots />
    </div>
  )
}

export default MoviesPage
