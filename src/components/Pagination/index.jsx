import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../Post/index'
import PaginationPost from '../PaginationPost/index'

export default function Pagination () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  useEffect( () => {
    const fetchPost = async () => {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
      setLoading(false)
    }

    fetchPost()
  }, [])

  //Get Current Post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <Post posts={currentPosts} loading={loading} />
      <PaginationPost postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  )
}