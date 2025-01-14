import Card from "./Card";

function PostList( {posts, apiUrl} ) {
    return (
        <>
            <main>
                <section>
                    <h2>I nostri post</h2>
                    <div className="row row-cols-2 row-cols-lg-3">
                        {posts.map((curPost) => (
                            <div className="col" key={curPost.id}>
                                <Card curPost={curPost} apiUrl={apiUrl}  />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default PostList;