import styled from 'styled-components';
import { globalColor } from '../../assets/colors/index';

export const FAQContainer = styled.div`
overflow: hidden;
  padding: 80px 0;
  width: 100%;
  height: 100vh;
  background: ${globalColor.white};
  `;
  
  export const FAQTitle = styled.h2`
  color: ${globalColor.darkGray};
  font-size: 28px;
  text-align: center;
  `;
  
  export const FAQWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  
  export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  
  &:hover {
    background-color: ${globalColor.darkGray};
    color: ${globalColor.white};
    }
    `;
    
    export const AnswerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 37%;
    height: 500px;
    `;
    
    export const AnswerText = styled.div`
    position: absolute;
    padding: 60px;
    width: 500px;
    text-align: justify;
    background: #fff;
  border-radius: 25px;
  margin-top: 8px;
  font-size: 16px;
  color: ${globalColor.black};
  transform: translateX(160%);
  border: 1px solid ${globalColor.black};
  transition: transform 0.5s ease, opacity 0.5s ease;

  ${({ active }) => active && `
    transform: translateX(10px);
    opacity: 1;
  `}
`;
