import { useNavigate } from "react-router-dom";
import Card from "./Card";

function PostList({ posts, apiUrl, deletePost }) {
    return (
        <div className="row row-cols-2 row-cols-lg-3">
            {posts.map((post) => (
                <div className="col" key={post.id}>
                    <Card post={post} apiUrl={apiUrl} deletePost={deletePost} />
                </div>
            ))}
        </div>
    );
}

export default PostList;