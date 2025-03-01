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

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
  }
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

  &:hover {
    background-color: ${globalColor.darkGray};
    color: ${globalColor.white};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    padding: 12px;
  }
`;

export const AnswerWrapper = styled.div`
  position: relative;
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
    opacity: 1;
  `}

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding: 20px;
  }
`;
