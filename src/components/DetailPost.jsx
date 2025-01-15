import { useParams } from "react-router-dom";

function DetailPost({ posts }) {
  const { id } = useParams();

  // Trova il post corrispondente all'ID
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <img src={`${post.image}`} alt={post.title} />
      <p>{post.content}</p>
      <p>Categoria: {post.category}</p>
    </div>
  );
}

export default DetailPost;