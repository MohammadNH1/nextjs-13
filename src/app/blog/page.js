import React from 'react'
import PostList from './PostList'


const Posts = [
    {
        id:1,
        title:'Hello this is first post',
        slug:'first'
    },
    {
        id:2,
        title:'Hello this is second post',
        slug:'second'
    },
    {
        id:3,
        title:'Hello this is third post',
        slug:'third'
    },
    {
        id:4,
        title:'Hello this is forth post',
        slug:'forth'
    },
]
const page = () => {
  return (
    <div>
        <h1>Blog page</h1>
      <PostList posts={Posts}/>
    </div>
  )
}

export default page
