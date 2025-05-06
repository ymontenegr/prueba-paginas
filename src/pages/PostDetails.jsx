import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useParams } from 'react-router-dom'

function PostDetails() {
    const {id} = useParams();
    const [post, setPost] = useState();

    const fetchPost = async(id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`);
        const data = await response.json();
        console.log(data);
        setPost(data);
    }

    useEffect(() => {
        fetchPost(id);
        console.log(post);
    }, [])


  return (
    <>
    <HeaderComponent></HeaderComponent>

    {post && (
      <section>
        <h3> {post.id} - {post.title}</h3>
        <p>User: {post.userId}</p>
        <p>{post.body}</p>
      </section>
    )}
    
    
    </>
  )
}

export default PostDetails