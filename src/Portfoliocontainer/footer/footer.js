import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css";

const InterCons = () => {
  return (
    <Column>
      <Heading>Social Media</Heading>
      <FooterLink href="#">
        <i className="fab fa-facebook-f">
          <span
            style={{ marginLeft: "10px" }}
            href="https://mobile.facebook.com/people/Ropio-Derrick/100009295641568?_rdc=1&_rdr"
          >
            Facebook
          </span>
        </i>
      </FooterLink>
      <FooterLink href="#">
        <i className="fab fa-instagram">
          <span
            style={{ marginLeft: "10px" }}
            href="https://www.instagram.com/ropio_derrick/"
          >
            Instagram
          </span>
        </i>
      </FooterLink>
      <FooterLink href="#">
        <i
          className="fab fa-twitter"
          href="https://mobile.twitter.com/derrickropio"
        >
          <span style={{ marginLeft: "10px" }}>Twitter</span>
        </i>
      </FooterLink>
      <FooterLink href="#">
        <i className="fab fa-github">
          <span
            style={{ marginLeft: "10px" }}
            href="https://github.com/ropio-derrick"
          >
            Github
          </span>
        </i>
      </FooterLink>
      <FooterLink href="#">
        <i className="fab fa-linkedin">
          <span
            style={{ marginLeft: "10px" }}
            href="https://ke.linkedin.com/in/derrick-ropio-a099a820a"
          >
            LinkedIn
          </span>
        </i>
      </FooterLink>
    </Column>
  );
};

const Footer = () => {
  return (
    <div>
      <Box style={{ marginTop: "100px", borderRadius: "80px 80px 0px 0px" }}>
        <Container>
          <Row>
            <Column>
              <img
                style={{
                  borderRadius: "45%",
                  justifySelf: "center",
                  marginTop: "50px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmAmgKPP5UEAFtTXZGNazZ_C2AH6JvbHfIQ&usqp=CAU"
              />
            </Column>
            <InterCons className="Inter1" />

            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">Mobile Development</FooterLink>
              <FooterLink href="#">Software Development</FooterLink>
              <FooterLink href="#">Tech Consultancy</FooterLink>
              <FooterLink href="#">Resume & CV</FooterLink>
            </Column>

            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Call: 0768047900</FooterLink>
              <FooterLink href="#">Location: Nairobi</FooterLink>
              <FooterLink href="#"> rodetuk@gmail.com</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
      <div className="InterMage">
        <Heading className="Header-Footer">
          Social <span className="Spanner"> Media</span>
        </Heading>
        <div className="iconnerz">
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span
                style={{ marginLeft: "10px" }}
                href="https://mobile.facebook.com/people/Ropio-Derrick/100009295641568?_rdc=1&_rdr"
              >
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span
                style={{ marginLeft: "10px" }}
                href="https://www.instagram.com/ropio_derrick/"
              >
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i
              className="fab fa-twitter"
              href="https://mobile.twitter.com/derrickropio"
            >
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-github">
              <span
                style={{ marginLeft: "10px" }}
                href="https://github.com/ropio-derrick"
              >
                Github
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-linkedin">
              <span
                style={{ marginLeft: "10px" }}
                href="https://ke.linkedin.com/in/derrick-ropio-a099a820a"
              >
                LinkedIn
              </span>
            </i>
          </FooterLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
