import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
    padding: 20px 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: linear-gradient(135deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.backgroundAlt});
    border: 1px solid #854CE6;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

    &:hover {
        box-shadow: 0px 6px 32px rgba(23, 92, 230, 0.3);
        transform: translateY(-8px);
        background: linear-gradient(135deg, #854CE6, ${({ theme }) => theme.card});
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }

    @media only screen and (max-width: 768px) {
        padding: 16px;
        gap: 12px;
        width: 300px;
    }

    @media only screen and (max-width: 300px) {
        width: 100%;
        padding: 12px;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
`;

const Image = styled.img`
    height: 70px;
    width: 200px;
    object-fit: cover;
    background-color: #000;
    border-radius: 10px 10px;
    border: 2px solid #854CE6;
    @media only screen and (max-width: 768px) {
        height: 50px;
        width: 50px;
    }
        &:hover {
        background:rgb(187, 161, 231);
        color: #fff;
        transform: translateY(-2px);
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Role = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: -10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.backgroundAlt};
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid #854CE6;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
        background: #854CE6;
        color: #fff;
        transform: translateY(-2px);
    }

    @media only screen and (max-width: 768px) {
        font-size: 12px;
        padding: 4px 10px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience?.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b style={{ marginTop: "5px", fontWeight: "bold", fontSize: '1rem' }}>Tech:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    );
};

export default ExperienceCard;
