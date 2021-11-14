import * as ReactBootstrap from "react-bootstrap";
import './Footer.css';
import Image from 'react-bootstrap/Image';
import Icon from '../../images/pngwing.png';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <ReactBootstrap.Container fluid id = "">
        <Image fluid src = {Icon} id = "FooterAppIcon" />
        <div>
            <ButtonGroup className="mb-2 row" id = "FooterIcons">
                <FontAwesomeIcon icon={faFacebook} onClick={() => {window.location = '#';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faTwitter}  onClick={() => {window.location = '#';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faLinkedin} onClick={() => {window.location = '#';}} className = "FooterIcon col-8 col-sm-8"/>
                <FontAwesomeIcon icon={faInstagram} onClick={() => {window.location = '#';}} className = "FooterIcon col-8 col-sm-8"/>
            </ButtonGroup>
        </div>
        <div id = "FooterCopyrightDiv">
            <p>Copyright © 2021 NuChange</p>
        </div>
    </ReactBootstrap.Container>
  );
}