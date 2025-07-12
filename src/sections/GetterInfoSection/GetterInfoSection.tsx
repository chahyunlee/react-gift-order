import { useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  SectionWrapper,
  SectionTitle,
  InputRow,
  InputLabel,
  Input,
  SectionDescription,
  SectionDivider,
} from "@/sections/GetterInfoSection/GetterInfoSection.style";

const GetterInfoSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>();

  const quantity = watch("quantity");
  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>받는 사람</SectionTitle>
        <InputRow>
          <InputLabel>이름</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              {...register("getterName", { required: "이름을 입력해주세요." })}
              type="text"
              placeholder="이름을 입력하세요."
              style={errors.getterName ? { borderColor: "#ff3b30" } : {}}
            />
            {errors.getterName && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {errors.getterName.message}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>전화번호</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              {...register("getterPhone", {
                required: "전화번호를 입력해주세요.",
              })}
              type="text"
              placeholder="전화번호를 입력하세요."
              style={errors.getterPhone ? { borderColor: "#ff3b30" } : {}}
            />
            {errors.getterPhone && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {errors.getterPhone.message}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>수량</InputLabel>
          <Input
            {...register("quantity", {
              valueAsNumber: true,
              min: { value: 1, message: "1 이상의 수량을 입력해주세요." },
            })}
            type="number"
            min={1}
            value={quantity}
          />
          {errors.quantity && (
            <SectionDescription
              style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
            >
              {errors.quantity.message}
            </SectionDescription>
          )}
        </InputRow>
      </SectionWrapper>
    </>
  );
};

export default GetterInfoSection;
