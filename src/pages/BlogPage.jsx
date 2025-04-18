import { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"


function BlogPage() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>BlogPage</div>
    </>
  )
}

export default BlogPage