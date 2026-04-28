import { Link } from 'react-router'


export function CardList({entries, authors, filteredText}){
    const cards = entries.map(entry => entry.title.toLowerCase().includes(filteredText.toLowerCase()) && <Card key={entry.id} id_post={entry.id_post} title={entry.title} date={entry.date} img={entry.img} author={authors.find(a => a.id_author === entry.id_author)}/>)
    return(
    <div className='cardlist'>
      {cards}
    </div>
  )
}



export function Card({id_post, title, date, img, author}){
  return (
    <div className="card">
      <Link to={"/blog/"+id_post}>
        <img src={img} alt="Imagen"/>
        <h1>{title}</h1>
        <p>{date.substring(0,10)}</p>
        <p>Autor {author?.name}</p>
      </Link>
    </div>
  );
}
