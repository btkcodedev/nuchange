import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleContainer from './Components/TitleContainer/TitleContainer';
import Tabs from './Components/Tabs/Tabs';
import ContentPage from './Components/ContentBodyPage/ContentBodyPage';
import Footer from './Components/Footer/Footer';
import React from 'react'; 


export default function App() {
  const [tabSelected, settabSelected] = React.useState("Home");
  const [pdpData, setPdpData] = React.useState("");

  const tabClicked = (data, pdpDataValue) => {
    settabSelected(data);
    if(typeof pdpDataValue !== 'undefined' 
        && 
        pdpDataValue !== null && pdpDataValue !== "")
        {setPdpData(pdpDataValue);}
  };
  return (
      <div className="App">
        <Header />
        <TitleContainer />
        <Tabs tabClicked={tabClicked} />
        <ContentPage 
          tabSelected = {tabSelected}
          tabClicked = {tabClicked} 
          pdpData = {pdpData}
        />
        <Footer />
      </div>
  );
}


