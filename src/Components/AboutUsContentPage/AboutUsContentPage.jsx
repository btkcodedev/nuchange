import * as ReactBootstrap from "react-bootstrap";
import './AboutUsContentPage.css';
import Image from 'react-bootstrap/Image';
import Icon from '../../images/about-us.jpg';

function AboutUsContentPage(){
    var aboutUsTextTitle = "The title for About Us";
    var aboutUsTextValue = "Photo Credit goes to google. Extras, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Extra, Thank you.";
    return(
        <ReactBootstrap.Container id = "aboutUsContentPageContainer">
            <div className = "row">
                <div id = "AUCTitle">
                    About Us
                </div>
                <div className = "row">
                    <Image fluid src = {Icon} id = "aboutUsImage" className = "col-md-6">
                    </Image>
                    <div id = "aboutUsText" className = "col-md-6">
                        <p id = "AUtitle">{aboutUsTextTitle}</p>
                        {aboutUsTextValue.split("\n").map((i,key) => {
                            return <div key={key} className = "abTextDiv">{i}</div>;
                        })}
                    </div>
                </div>
            </div>
        </ReactBootstrap.Container>
    );
}

export default AboutUsContentPage;