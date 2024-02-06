import styled from "styled-components";

export const BasicButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BigButton = styled(BasicButton)`
  padding: 15px 30px;
  font-size: 18px;
`;

export const SmallButton = styled(BasicButton)`
  padding: 5px 10px;
  font-size: 14px;
`;
