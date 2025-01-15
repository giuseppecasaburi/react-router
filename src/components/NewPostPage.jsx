import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: ""
};

function NewPostPage({ apiUrl, posts, setPosts }) {

    // Funzione per gestire l'invio del form
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handlePostForm = (event) => {
        event.preventDefault();

        axios.post(`${apiUrl}/posts`, formData).then((resp) => {

            const newPost = resp.data
            const newArray = [...posts, newPost]; // Creo un nuovo array dove unisco il vecchio al nuovo elemento

            setPosts(newArray); // Aggiorno l'array iniziale

            setFormData(initialFormData);// Reset del form

            navigate(`/detailpost/${newPost.id}`)
        })

    };

    // Gestisce il cambio dei valori degli input
    const handleInputChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        const newValue =
            type === "file" ? files[0] : type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    return (
        <div className="container">
            <section>
                <h3>Aggiungi un nuovo post</h3>
                <form onSubmit={handlePostForm}>
                    <div className="mb-3">
                        <label htmlFor="title">Titolo del post</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content">Contenuto del post</label>
                        <textarea
                            name="content"
                            id="content"
                            className="form-control"
                            value={formData.content}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image">Immagine</label>
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Salva
                    </button>
                </form>
            </section>
        </div>
    );
}

export default NewPostPage;