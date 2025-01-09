import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  padding: 20px 16px; /* Added padding for mobile */
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 20px 0px 80px; /* Adjusted padding */
  gap: 16px; /* Increased gap for better spacing */
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 16px 0px 60px; /* Reduced padding for mobile */
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  flex-wrap: wrap; /* Added to allow wrapping on smaller screens */
  @media (max-width: 768px) {
    gap: 8px; /* Reduced gap for smaller screens */
    margin: 16px 0;
  }
`;

export const ToggleButton = styled.button`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? "linear-gradient(135deg, #854CE6, #5D3FD3)" : theme.card};
  color: ${({ active, theme }) =>
    active ? theme.text_primary : theme.text_secondary};
  box-shadow: ${({ active }) =>
    active
      ? "0px 4px 10px rgba(133, 76, 230, 0.4)"
      : "0px 4px 8px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #854ce6, #5d3fd3);
    color: ${({ theme }) => theme.text_primary};
    transform: scale(1.05);
    box-shadow: 0px 6px 16px rgba(133, 76, 230, 0.5);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjusted padding for smaller screens */
    font-size: 12px; /* Adjusted font size for mobile */
  }
`;

export const Divider = styled.div`
  height: 24px;
  width: 2px;
  background: ${({ theme }) => theme.text_secondary + 50};
  @media (max-width: 768px) {
    height: 16px; /* Reduced divider height for smaller screens */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap; /* Enabled wrapping for responsive layout */
  padding: 20px 0; /* Added padding */
  @media (max-width: 768px) {
    gap: 16px; /* Reduced gap for smaller screens */
    padding: 16px 0;
  }
`;
