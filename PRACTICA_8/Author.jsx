import { Link } from 'react-router'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Author(){
    const { id_author } = useParams();
    const [author, setAuthor] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8000/authors/'+id_author, {
            method: "GET",
            credentials: "include"
        })
        .then( (res) => {
            if(res.status == 401){
            navigate('/login');
            }
            return res.json()})
        .then( (data) => setAuthor(data))
        .catch((error) => console.log(error))
        }, [id_author, navigate]);

    return(
        <div>
            <h1>Autor: {author.name} {author.last_name}</h1>
            <p>Edad: {author.age}</p>
            <p>Cumpleaños: {author.fecha_nacimiento}</p>
            <p>Email: {author.email}</p>
            <p>Teléfono {author.phone}</p>
        </div>

    )
}