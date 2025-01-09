import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  z-index: 1200;
`;

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  background: linear-gradient(135deg, #1e1e2f, #29293d);
  color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 12px 0;
  color: #ffffff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Date = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  margin: 16px 0;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px; /* Increased max-height for better visibility */
  object-fit: contain; /* Changed from cover to contain to avoid cutting any part of the image */
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-height: 300px; /* Adjusted for smaller screens */
  }

  @media (max-width: 480px) {
    max-height: 200px; /* Adjusted further for mobile screens */
  }
`;


const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 12px;
  background: linear-gradient(135deg,rgb(176, 76, 230),rgb(32, 40, 190));
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Members = styled.div`
  margin-top: 16px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #854ce6;
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const MemberLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #854ce6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
`;

const Button = styled.a`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background: #854ce6;
  transition: all 0.3s ease;

  &:hover {
    background: #5d3fd3;
  }

  ${({ dull }) =>
    dull &&
    `
    background: #3a3a4f;
    color: #a0a0a0;

    &:hover {
      background: #4a4a5f;
    }
  `}
`;

const CloseIcon = styled(CloseRounded)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 6px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary + "99"};
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal open={openModal.state} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseIcon onClick={() => setOpenModal({ state: false, project: null })} />
          <Image src={project?.image} alt={project?.title} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project?.member && (
            <Members>
              {project.member.map((member, index) => (
                <Member key={index}>
                  <MemberImage src={member.img} alt={member.name} />
                  <MemberInfo>
                    <MemberName>{member.name}</MemberName>
                    <MemberLinks>
                      <IconLink href={member.github} target="_blank" rel="noopener noreferrer">
                        <GitHub />
                      </IconLink>
                      <IconLink href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                      </IconLink>
                    </MemberLinks>
                  </MemberInfo>
                </Member>
              ))}
            </Members>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="_blank" rel="noopener noreferrer">
              View Code
            </Button>
            <Button href={project?.webapp} target="_blank" rel="noopener noreferrer">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
