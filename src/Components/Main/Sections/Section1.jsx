
const Section1 = (props) => {
  return(
    <section className="price">
      <img src={props.description.img} alt="img" />
      <p>{props.description.description}</p>
    </section>
  )
}
export default Section1;