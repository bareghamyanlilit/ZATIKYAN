import React, { useState } from 'react';
import { faqData } from "../../constant/faqArray";
import { FAQContainer, FAQTitle, FAQWrapper, QuestionWrapper, QuestionButton, AnswerWrapper, AnswerText } from './styled';
import { Container } from '../../styled';
import { useTranslation } from 'react-i18next';
import { globalColor } from '../../assets/colors';

export const FAQPage = () => {
    const { t } = useTranslation();
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <FAQContainer>
            <Container>
                <FAQTitle>{t('faqTitle')}</FAQTitle>
                <FAQWrapper>
                    <QuestionWrapper>
                        {faqData.map((faq, index) => {
                            const isActive = activeQuestion === index;
                            return (
                                <QuestionButton 
                                    key={index} 
                                    onClick={() => toggleAnswer(index)}
                                    style={{ 
                                        backgroundColor: isActive ? `${globalColor.darkGray}` : 'transparent', 
                                        color: isActive ? 'white' : 'black' 
                                    }}
                                >
                                    {t(faq.question)}
                                </QuestionButton>
                            );
                        })}
                    </QuestionWrapper>

                    <AnswerWrapper>
                        {faqData.map((faq, index) => (
                            <AnswerText key={index} active={activeQuestion === index}>
                                {t(faq.answer)}
                            </AnswerText>
                        ))}
                    </AnswerWrapper>
                </FAQWrapper>
            </Container>
        </FAQContainer>
    );
};
