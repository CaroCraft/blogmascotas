import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Post(){
    const {id_post} = useParams();
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState([{}]);
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL
+ '/posts'+id_post)
        .then( (res) => res.json())
        .then( (data) => setPost(data));
        },[id_post]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+'/authors'+post.id_author)
        .then( (res) => res.json())
        .then( (data) => setAuthor(data));
        },[post.id_author]);

        return(
        <>
            {post.img && <img src={'../'+post.img} alt="Imagen del post"></img>}
            <h1>{post.title}</h1>
            <h2>Escrito por: {post.id_author}</h2>
            <h2>{post.date}</h2>
            <Link to={`/login`}>
                <h3>Autor: {author.name}</h3>
            </Link>
            <p>{post.text}</p>

        </>
        );
}