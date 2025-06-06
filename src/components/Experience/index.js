import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 16px 60px; /* Adjusted padding */
  @media (max-width: 960px) {
    padding: 16px 8px 40px; /* Reduced padding for smaller screens */
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0; /* Adjusted for better spacing */
  gap: 16px;
  @media (max-width: 960px) {
    padding: 16px 0;
    gap: 12px; /* Reduced gap for smaller screens */
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 8px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 16px; /* Adjusted for spacing */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (max-width: 768px) {
    margin-top: 12px;
    gap: 12px;
  }
`;

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different companies and projects.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
