import HomeContentpage from '../HomeContentPage/HomeContentPage';
import AboutUsContentpage from '../AboutUsContentPage/AboutUsContentPage';
import ProductsContentPage from '../ProductsContentPage/ProductsContentPage';
import ProductDescriptionPage from '../ProductDescriptionPage/ProductDescriptionPage';
import React from 'react';
import { useEffect } from 'react';

export default function ContentPage(props){
  var pdpData = "";  
  const [tabSelected, settabSelected] = React.useState(props.tabSelected); 

  useEffect(() => {
    window.scrollTo(0, 0);
    settabSelected(props.tabSelected);
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  var itemClicked = (data) => {
        pdpData = data;
        props.tabClicked("PDP", pdpData);
  } 

  if(tabSelected === "Home"){
    return (<HomeContentpage />);    
  }  
  else if (tabSelected === "AboutUs"){
    return (<AboutUsContentpage />);
  }
  else if (tabSelected === "Products"){
    return (<ProductsContentPage itemClicked = {itemClicked} />);
  }
  else if (tabSelected === "PDP"){
    return (<ProductDescriptionPage pdpData = {props.pdpData} />);
  }
  else{
    return (<HomeContentpage />);
  }
}   


