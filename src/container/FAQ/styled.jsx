import styled from 'styled-components';
import { globalColor } from '../../assets/colors/index';

export const FAQContainer = styled.div`
<<<<<<< HEAD
  background: url("https://as1.ftcdn.net/jpg/01/83/59/14/1000_F_183591483_Ej0eDBlcuirwxxzGAmHEhpldzxvptrjx.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 155px;
  width: 100%;
  height: 100vh;
=======
  overflow: hidden;
  padding: 80px 0;
  width: 100%;
  height: 100vh;
  background: ${globalColor.white};
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
`;

export const FAQTitle = styled.h2`
  color: ${globalColor.darkGray};
  font-size: 28px;
  text-align: center;

  @media (max-width: 768px) {
<<<<<<< HEAD
    font-size: 22px;
=======
    font-size: 24px;
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
<<<<<<< HEAD
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 80px;
=======
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
  }
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
<<<<<<< HEAD
    align-items: flex-start;
=======
    width: 90%;
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
  }
`;

export const QuestionButton = styled.button`
  border: 2px solid ${globalColor.darkGray};
  color: ${globalColor.darkGray};
  width: 500px;
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 15px;
  text-align: justify;
  font-size: 17px;
  font-weight: bold;
  border-radius: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

<<<<<<< HEAD
  &:hover, &:focus {
=======
  &:hover {
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
    background-color: ${globalColor.darkGray};
    color: ${globalColor.white};
  }

  @media (max-width: 768px) {
    width: 100%;
<<<<<<< HEAD
    font-size: 16px;
=======
    font-size: 15px;
    padding: 12px;
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
  }
`;

export const AnswerWrapper = styled.div`
  position: relative;
<<<<<<< HEAD
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 300px;
  
  @media (max-width: 994px) {
    width: 70%;
    justify-content: start;
    }
    `;
    
    export const AnswerText = styled.div`
    position: absolute;
    padding: 30px;
    text-align: justify;
    background: #fff;
    border-radius: 25px;
    font-size: 16px;
    color: ${globalColor.black};
    background-color: rgba(255, 255, 255, 0.7); 
    transform: translatveY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
    box-shadow: 5px 2px 9px rgba(0, 0, 0, 0.6);

  ${({ active }) => active && `
    transform: translateY(0);
=======
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 272px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const AnswerText = styled.div`
  position: absolute;
  padding: 40px;
  text-align: justify;
  background: #fff;
  border-radius: 25px;
  font-size: 16px;
  color: ${globalColor.black};
  border: 1px solid ${globalColor.black};
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 0;

  ${({ active }) => active && `
    transform: translateX(0);
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
    opacity: 1;
    visibility: visible;
  `}

<<<<<<< HEAD
=======
  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding: 20px;
  }
>>>>>>> 3f731de4844732af5ac86b03a8842e34aa6ab917
`;


