import { Link } from "react-router-dom";

function PostCard(props) {

    const {post} = props;

  return (
    <article>
        <Link to={'/blog/${post.id}'}>{post.id} - {post.title}</Link>
        
        <p>{post.body}</p>
    </article>
  )
}

export default PostCard