import styled from "@emotion/styled";

export const ImageListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing.spacing3};
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: 12px 0;
  &::-webkit-scrollbar {
    height: 8px;
    background: ${({ theme }) => theme.colors.gray200};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray500};
    border-radius: 16px;
  }
`;

export const Thumbnail = styled.img<{ selected?: boolean }>`
  width: 120px;
  height: 64px;
  border-radius: 12px;
  border: 2px solid ${({ selected }) => (selected ? "#222222" : "none")};
  cursor: pointer;
`;

export const MainImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 20px;
  background: transparent;
`;

export const MainImage = styled.img`
  width: 360px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
`;

export const MessageInput = styled.textarea`
  width: 640px;
  min-width: 480px;
  min-height: 48px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 12px;
  padding: 14px 16px;
  margin: ${({ theme }) => theme.spacing.spacing4};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  box-sizing: border-box;
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing.spacing6};
  border-radius: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const InputLabel = styled.label`
  min-width: 80px;
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Input = styled.input`
  flex: 1 1 0;
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }
`;

export const SectionDivider = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.colors.gray300};
  margin: ${({ theme }) => theme.spacing.spacing6} 0;
  width: 100%;
`;
