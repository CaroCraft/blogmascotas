export function CardList({entries, filteredText}){
    const cards = entries.map(entry => entry.title.toLowerCase().includes(filteredText.toLowerCase()) && <Card id={entry.id} title={entry.title} date={entry.date} img={entry.img}/>)
    return(
    <div className='cardlist'>
      {cards}
    </div>
  )
}

export function Card({id, title, date, img}){
    return(
      <div className='card'>
        <img src={img}></img>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    )
  }


