import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;

export const AddGetterButton = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray400};
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const GetterList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 16px;
`;
export const Text = styled.p`
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.gray600};
`;
export const SectionDivider = styled.hr`
  border: none;
  height: 12px;
  background: ${({ theme }) => theme.colors.gray100};
`;
