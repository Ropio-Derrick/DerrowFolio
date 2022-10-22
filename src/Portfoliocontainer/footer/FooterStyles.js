import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 30px;
  background: white;
  bottom: 0;
  margintop: 50px;

  @media (max-width: 1000px) {
    padding: 10px 10px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 50px 0px 0px 0px auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0px;

  @media (max-width: 600px) {
    padding-left: 10px;
  }
  @media (max-width: 470px) {
    padding-left: 0px;
    line-height: 20px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 25% 25% 25% 25%;
    gap: 20px;
    scale: 80%;
  }
  @media (max-width: 640px) {
    gap: 5px;
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const FooterLink = styled.a`
  color: #1f2235;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #ff8400;
    transition: 200ms ease-in;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #1f2235;
  margin-bottom: 20px;
  font-weight: bold;
`;
