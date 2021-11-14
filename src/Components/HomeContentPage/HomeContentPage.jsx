import * as ReactBootstrap from "react-bootstrap";
import './HomeContentPage.css';

export default function HomeContentPage(){
    return(
        <ReactBootstrap.Container id = "homePageContainer">
            <ReactBootstrap.Container>
                <div className = "row">
                    <div className = "col-md-12">
                        <div id = "HomePageDesc">
                            <div id = "DescTitle">
                                Sample ecommerce app
                            </div>
                            <div id = "DescContent">
                                Content to be followed for more information exchange about the product
                            </div>
                                <ReactBootstrap.Button id = "HomePageOrdernowButton">Order Now</ReactBootstrap.Button>
                        </div>
                    </div>
                </div>
            </ReactBootstrap.Container>
        </ReactBootstrap.Container>
    );
}
