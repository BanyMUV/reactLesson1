import "./Header.css";

const Header = (props) => {
  
  return (
    <header>
      <img src={props.logoToProps} alt="logo" />
      <nav>
        {
          props.linksToProps.map(el => <a href={el.link}>{el.name}</a>)
        }
      </nav>
    </header>
  )
}
export default Header;