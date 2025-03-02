import styled from 'styled-components';
import { globalColor } from '../../assets/colors/index';

export const FAQContainer = styled.div`
  background: url("https://as1.ftcdn.net/jpg/01/83/59/14/1000_F_183591483_Ej0eDBlcuirwxxzGAmHEhpldzxvptrjx.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 155px;
  width: 100%;
  height: 100vh;
`;

export const FAQTitle = styled.h2`
  color: ${globalColor.darkGray};
  font-size: 28px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 80px;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const QuestionButton = styled.button`
  border: 2px solid ${globalColor.darkGray};
  color: ${globalColor.darkGray};
  width: 500px;
  padding: 15px;
  text-align: justify;
  font-size: 17px;
  font-weight: bold;
  border-radius: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover, &:focus {
    background-color: ${globalColor.darkGray};
    color: ${globalColor.white};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const AnswerWrapper = styled.div`
  position: relative;
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
    opacity: 1;
  `}

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding: 20px;
  }
`;
