//import { entries } from './data'
import { CardList } from './components/Cards.jsx'
import { useState, useEffect } from 'react'
import  NewPost from './components/NewPost.jsx'

export function Blog(){
    const [filteredText, setFilteredText] = useState("") 
    const [entries, setEntries] = useState([{id_post:0, title:"", date:"", image:"", text:"", id_author:0}]);
    const [authors, setAuthors] = useState([{id_author:0, name:"", last_name:"", email:""}]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+"/posts")
        .then((res) => res.json())
        .then((posts) => setEntries(posts));
    }, []);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+"/authors")
        .then((res) => res.json())
        .then((authors) => setAuthors(authors));
    }, []);
    

    function handleChange(e){
        setFilteredText(e.target.value)
    }

    return(
        <>
        <h1>Animales</h1>
        <NewPost></NewPost>
        <div className='filter'>
            <table>
                <tbody>
                    <tr>
                        <td>Buscar</td>
                        <td><input type='text' value={filteredText} onChange={handleChange}></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='cardlist'>
            <CardList entries={entries} authors={authors} filteredText={filteredText}></CardList>
        </div>
        </>
    )
}