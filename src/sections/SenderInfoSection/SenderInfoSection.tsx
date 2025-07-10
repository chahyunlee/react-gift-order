import { useInput } from "@/hooks/useInput";
import {
  SectionWrapper,
  SectionTitle,
  InputRow,
  Input,
  SectionDescription,
  SectionDivider,
} from "./SenderInfoSection.style";

interface SenderInfoSectionProps {
  senderNameInput: ReturnType<typeof useInput>;
}

const SenderInfoSection = ({ senderNameInput }: SenderInfoSectionProps) => {
  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>보내는 사람</SectionTitle>
        <InputRow>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            value={senderNameInput.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              senderNameInput.handleInput(e.target.value)
            }
            onBlur={senderNameInput.handleBlur}
            style={
              senderNameInput.error && senderNameInput.touched
                ? { borderColor: "#ff3b30" }
                : {}
            }
          />
        </InputRow>
        <SectionDescription>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </SectionDescription>
        {senderNameInput.error && senderNameInput.touched && (
          <SectionDescription style={{ color: "#ff3b30" }}>
            {senderNameInput.error}
          </SectionDescription>
        )}
      </SectionWrapper>
    </>
  );
};

export default SenderInfoSection;
