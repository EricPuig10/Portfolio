import styled from "styled-components";

export const DivContact = styled.div`
  padding-top: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 830px) {
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  @media (max-width: 450px) {
    padding-top: 35%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;

export const LeftDiv = styled.div`
display: flex;
justify-content: space-around;;
align-items: center;
width: 80%;
`;



export const IconContact = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
width: 100%;
background-color: transparent;
@media (max-width:450px){
    display: flex;
    flex-direction: column;
}
`
export const ImageContact = styled.img`
  width: 20%;
  height: 50%;
  object-fit: fill;
  border-radius: 10%;
  cursor: pointer;
`
