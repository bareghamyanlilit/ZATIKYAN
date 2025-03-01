import React, { useState } from 'react';
import { faqData } from "../../constant/faqArray";
import { FAQContainer, FAQTitle, FAQWrapper, QuestionWrapper, QuestionButton, AnswerWrapper, AnswerText } from './styled';
import { Container } from '../../styled';

export const FAQPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <FAQContainer>
            <Container>
                <FAQTitle>Frequently Asked Questions</FAQTitle>
                <FAQWrapper>
                    <QuestionWrapper>
                        {faqData.map((faq, index) => (
                            <QuestionButton key={index} onClick={() => toggleAnswer(index)}>
                                {faq.question}
                            </QuestionButton>
                        ))}
                    </QuestionWrapper>

                    <AnswerWrapper>
                        {faqData.map((faq, index) => (
                            <AnswerText key={index} active={activeQuestion === index}>
                                {faq.answer}
                            </AnswerText>
                        ))}
                    </AnswerWrapper>
                </FAQWrapper>
            </Container>
        </FAQContainer>
    );
};
