import React from 'react'
import { Link } from 'wouter'

export default function PaginationPost ({ postPerPage, totalPosts, paginate}) {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil( totalPosts / postPerPage ); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <nav className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)} to='!#' className="page-link">{number}</Link>
          </li>
        ))}
      </nav>
    </>
  )

}