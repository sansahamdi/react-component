 
import './App.css';
import MyProfileComponent from "./Component/Profile/ProfilPhoto";
import MyFullNameComponent from "./Component/Profile/FullName";
import MyAdressComponent from "./Component/Profile/Address";


function App() {
  return (
    <div className="mybadge">
      <MyProfileComponent />
      <hr/>
      <MyFullNameComponent />
      <MyAdressComponent />
    </div>
  );
}

export default App;
