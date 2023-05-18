import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import "./Main.css";

const Main = (props) => {
  return(
    <main>
      <Section1 description={props.section1ToProps}/>
      <Section2 cards={props.section2ToProps.cards}/>
      <Section3 />
    </main>
  )
}
export default Main;