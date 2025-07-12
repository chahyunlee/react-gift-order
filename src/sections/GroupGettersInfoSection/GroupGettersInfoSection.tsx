import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import AddGetterModal from "@/components/AddGetterModal/AddGetterModal";
import {
  SectionWrapper,
  SectionDivider,
  SectionTitle,
  AddGetterButton,
  InputRow,
  GetterList,
  Text,
} from "@/sections/GroupGettersInfoSection/GroupGettersInfoSection.style";

const GroupGettersInfoSection = () => {
  const { control, watch } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "getters",
  });

  const getters = watch("getters");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (newGetter: {
    name: string;
    phone: string;
    quantity: number;
  }) => {
    append(newGetter);
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <InputRow>
          <SectionTitle>받는 사람</SectionTitle>
          <AddGetterButton type="button" onClick={() => setIsModalOpen(true)}>
            추가
          </AddGetterButton>
          <AddGetterModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAdd}
          />
        </InputRow>
        <GetterList>
          {fields.length === 0 ? (
            <Text>
              받는 사람이 없습니다.
              <br />
              받는 사람을 추가해주세요.
            </Text>
          ) : (
            fields.map((field, index) => (
              <InputRow key={field.id}>
                <span>{field.name}</span>
                <span>{field.phone}</span>
                <span>{field.quantity}개</span>
                <button type="button" onClick={() => remove(index)}>
                  삭제
                </button>
              </InputRow>
            ))
          )}
        </GetterList>
      </SectionWrapper>
    </>
  );
};

export default GroupGettersInfoSection;
