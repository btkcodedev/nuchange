import * as ReactBootstrap from "react-bootstrap";
import './ProductDescriptionPage.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemsDataObject from "./PdpData";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function ProductDescriptionPage(props){
    
    var allObjectData = ItemsDataObject;
    var data = [props.pdpData, ...allObjectData.products];
    var productDescription = "This is the Data description that to be used inorder to describe the products";
    
    if(props.pdpData.available == 0)
    {
        var inside = <div>Sorry the Product is unavailable</div>;
    }
    else{
        var inside = <div>{props.pdpData.available} left on stock</div>;
    }
    
    return(
        <ReactBootstrap.Container id = "ProductDescriptionPageContainer">
            <div id = "PDPTitle">
                {props.pdpData.name}
            </div>
            <div className = "row">
                <div className = "col-md-6" id = "pdpImageDiv">
                    <Carousel>
                        {
                            data.map((data, i) => 
                            (
                            <Carousel.Item key = {i} interval = {'1000000'}>
                                <img
                                key = {i}
                                className="d-block w-100"
                                src={data.Image}
                                alt="First slide"
                                />
                            </Carousel.Item>)
                        )}
                    </Carousel>
                </div>
                <div className = "col-md-6" id = "pdpDescriptionDiv">
                    <div id= "pdpDescTitle">{props.pdpData.name}</div>
                    <br></br>
                    <br></br>
                    <div id= "pdpDescPrice">₹{props.pdpData.price}</div>
                    <br></br>
                    <div id = "pdpProductDesc">
                        <p>{productDescription}</p>
                    </div>
                    <div id = "pdpDescCategory">
                        <p>Category : <span id = "pdpCategoryValues">{props.pdpData.category}</span></p>
                        <p>Vendor: <span id="pdpCategoryValues">{props.pdpData.vendor}</span></p>
                    </div> 
                    <div id = "pdpAvailableDiv">
                        <p id = "pdpDescAvailable">{inside}</p>
                        <div className = "row col-6 col-sm-8 col-md-12 col-lg-8">
                            <div className = "col-sm-4">
                                <p className= "" id = "pdpQuantityText">Quantity:</p>
                            </div>
                            <div className = "col-sm-4 col-6">
                                <InputGroup className="mb-3" id = "availableCountInputField" >
                                <FormControl aria-label="availableCount" />
                                </InputGroup>
                            </div>
                            <div className = "col-sm-4 col-2" id = "pdpOrdernowButton">
                                <Button id = "pdpOrderButton">Order now</Button>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </ReactBootstrap.Container>
    );
}