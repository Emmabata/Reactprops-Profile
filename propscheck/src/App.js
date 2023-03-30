import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  // const getData = {
  //   fullName: "Keanu Charles",
  //   Bio : "Keanu Charles Reeves is a Canadian actor. Born in Beirut, Lebanon and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood.",
  //   Profession:"Actor"
  // }

  return (
    <div className="App">
      <Profile fullName='Keanu Charles' Bio='Keanu Charles Reeves is a Canadian actor. Born in Beirut, Lebanon and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood.'/>
      {/* <Profile>
        <img
        src={logo} 
        alt="" 
        />
      </Profile> */}
       
    </div>
  );
}

export default App;
