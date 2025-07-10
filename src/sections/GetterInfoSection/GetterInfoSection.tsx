import { useInput } from "@/hooks/useInput";
import {
  SectionWrapper,
  SectionTitle,
  InputRow,
  InputLabel,
  Input,
  SectionDescription,
  SectionDivider,
} from "./GetterInfoSection.style";

interface GetterInfoSectionProps {
  getterNameInput: ReturnType<typeof useInput>;
  getterPhoneInput: ReturnType<typeof useInput>;
  quantity: number;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityBlur: () => void;
}

const GetterInfoSection = ({
  getterNameInput,
  getterPhoneInput,
  quantity,
  onQuantityChange,
  onQuantityBlur,
}: GetterInfoSectionProps) => {
  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>받는 사람</SectionTitle>
        <InputRow>
          <InputLabel>이름</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              id="getterName"
              type="text"
              placeholder="이름을 입력하세요."
              value={getterNameInput.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                getterNameInput.handleInput(e.target.value)
              }
              onBlur={getterNameInput.handleBlur}
              style={
                getterNameInput.error && getterNameInput.touched
                  ? { borderColor: "#ff3b30" }
                  : {}
              }
            />
            {getterNameInput.error && getterNameInput.touched && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {getterNameInput.error}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>전화번호</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              id="getterPhone"
              type="text"
              placeholder="전화번호를 입력하세요."
              value={getterPhoneInput.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                getterPhoneInput.handleInput(e.target.value)
              }
              onBlur={getterPhoneInput.handleBlur}
              style={
                getterPhoneInput.error && getterPhoneInput.touched
                  ? { borderColor: "#ff3b30" }
                  : {}
              }
            />
            {getterPhoneInput.error && getterPhoneInput.touched && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {getterPhoneInput.error}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>수량</InputLabel>
          <Input
            id="getterCount"
            type="number"
            min={1}
            value={quantity}
            onChange={onQuantityChange}
            onBlur={onQuantityBlur}
          />
        </InputRow>
      </SectionWrapper>
    </>
  );
};

export default GetterInfoSection;
