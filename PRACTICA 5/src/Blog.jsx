//import { entries } from './data'
import { CardList } from './components/Cards.jsx'
import { useState } from 'react'

export function Blog(){
    const [filteredText, setFilteredText] = useState("") 
    const [entries, setEntries] = useState([{id_post:0, title:"", date:"", image:"", text:"", id_author:0}]);

    useEffect(() => {
        fetch("http://localhost:8000/posts")
        .then((res) => res.json())
        .then((posts) => setEntries(posts));
    }, []);

    function handleChange(e){
        setFilteredText(e.target.value)
    }

    return(
        <>
        <h1>Animales</h1>
        <div className='filter'>
            <table>
            <tr>
                <td>Buscar</td>
                <td><input type='text' value={filteredText} onChange={handleChange}></input></td>
            </tr>
            </table>
        </div>
        <div className='cardlist'>
            <CardList entries={entries} filteredText={filteredText}></CardList>
        </div>
        </>
    )
}