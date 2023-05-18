import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = (props) => {
  return (
    <div className="App">
      <h1>HelooOOOOO!!!!O_O</h1>
      <Header 
      linksToProps={props.data.header.links} 
      logoToProps={props.data.header.logo}
      />

      <Main 
      section1ToProps={props.data.section1} 
      section2ToProps={props.data.section2}
      />
      
      <Footer />
    </div>
  );
}

export default App;
