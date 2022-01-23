import useSWR from "swr"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
const fetcher = (url) => fetch(url).then((res) => res.json())
import React, { useEffect, useRef, useState } from "react"

function ListUsers() {
  const [page, setPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)
  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [])

  const { data, error } = useSWR(
    `http://localhost:3001/users?page=${page}&userPerPage=${userPerPage}`,
    fetcher
  )

  console.log(data)

  const onPageChangeHandler = (event) => {
    setPage(event.target.value)
    // setEditing(inputRef)
  }

  const onUserChangeHandler = (event) => {
    setUserPerPage(event.target.value)
  }
  const pageDown = () => {
    if (page === 1) return
    setPage(page - 1)
  }
  const pageUp = () => {
    if (page === data.length) return
    setPage(page + 1)
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <div>
        {data.map((user, index) => (
          <div className="user" key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
      <div className="user-page-navigation">
        <div className="user-navigation">
          <MdChevronLeft onClick={pageDown} />
          <input
            type="text"
            name="page"
            ref={inputElement}
            onChange={onPageChangeHandler}
            value={page}
          />
          <MdChevronRight onClick={pageUp} />
        </div>
        <div className="user-per-page">
          <p className="text">Users per page</p>
          <input
            type="text"
            name="page"
            onChange={onUserChangeHandler}
            value={userPerPage}
          />
        </div>
      </div>
    </div>
  )
}

export default ListUsers
