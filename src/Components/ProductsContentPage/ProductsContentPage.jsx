import * as ReactBootstrap from "react-bootstrap";
import './ProductsContentPage.css';
import React from 'react';
import ItemsDataObject from "./data";
import Card from 'react-bootstrap/Card';


function Products(props) {
    return (
      <React.Fragment>
          {ItemsDataObject.products
            .map((data, i) => 
                (
                  <div key={i} className = "itemsDiv col-md-6 col-lg-4">
                    <Card style={{ width: '18rem' }} onClick={() => props.itemClicked(data)}>
                        <Card.Img variant="top" src= {data.Image} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                              ₹{data.price} <br /> 
                              Available: {data.available}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>
             )
            )}
      </React.Fragment>
    );
}

export default function ProductsContentPage(props){
    function itemClicked(data){
        props.itemClicked(data);
    }
    return(
        <ReactBootstrap.Container id = "productsContentPageContainer">
            <div id = "PCTitle">
                Products
            </div>
            <div id = "productsContainer">
                <div className = "row">
                    <Products itemClicked = {itemClicked} />
                </div>
            </div>
        </ReactBootstrap.Container>
    );
}

