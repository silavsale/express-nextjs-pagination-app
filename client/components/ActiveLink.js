import { useRouter } from "next/router"

function ActiveLink({ children, href }) {
  const router = useRouter()
  console.log(router.asPath)
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "#f1c232" : "",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
