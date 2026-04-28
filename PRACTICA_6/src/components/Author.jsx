import { Link } from 'react-router'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Author(){
    const { id_author } = useParams();
    const [author, setAuthor] = useState({});
    useEffect(() => {
        fetch('http://localhost:8000/authors/'+ id_author)
        .then( (res) => res.json())
        .then( (data) => setAuthor(data));
        },[id_author]);

    return(
        <div>
            <h1>Autor: {author.name} {author.last_name}</h1>
            <p>Edad: {author.age}</p>
            <p>Cumpleaños: {author.birth_date}</p>
            <p>Email: {author.email}</p>
            <p>Teléfono {author.phone}</p>
        </div>

    )
}