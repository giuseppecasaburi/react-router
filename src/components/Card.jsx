import { useNavigate } from "react-router-dom";

function Card({ post, apiUrl, deletePost }) {
    const navigate = useNavigate();
    return (
        <div className="card">
            <div className="card-body">
                <h4>{post.title}</h4>
                <img src={`${apiUrl}/${post.image}`} alt={post.title} />
                <p>{post.content}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/detailpost/${post.id}`)}
                >
                    Dettagli
                </button>
                <button
                    onClick={() => deletePost(post.id)}
                    className="btn btn-danger"
                >
                    Cancella
                </button>
            </div>
        </div>
    )
}

export default Card;