const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="img" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

const Section2 = (props) => {
  return(
    <section className="cards">
      
    {
      props.cards.map (card => <Card img={card.img} title={card.title} description={card.description} />)
    }

    </section>
  )
}
export default Section2;