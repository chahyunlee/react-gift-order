import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import AddGetterModal from "@/components/AddGetterModal/AddGetterModal";
import {
  SectionWrapper,
  SectionDivider,
  SectionTitle,
  AddGetterButton,
  InputRow,
  GetterList,
  GetterListTable,
  Text,
} from "@/sections/GroupGettersInfoSection/GroupGettersInfoSection.style";

const GroupGettersInfoSection = () => {
  const { watch } = useFormContext<FormValues>();

  const getters = watch("getters");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <InputRow>
          <SectionTitle>받는 사람</SectionTitle>
          <AddGetterButton type="button" onClick={() => setIsModalOpen(true)}>
            {getters.length > 0 ? "수정" : "추가"}
          </AddGetterButton>
        </InputRow>
        <AddGetterModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
        />

        {getters.length > 0 && (
          <GetterListTable as="table">
            <thead>
              <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {getters.map((getter, idx) => (
                <tr key={idx}>
                  <td>{getter.name}</td>
                  <td>{getter.phone}</td>
                  <td>{getter.quantity}</td>
                </tr>
              ))}
            </tbody>
          </GetterListTable>
        )}

        {getters.length === 0 && (
          <GetterList>
            <Text>
              받는 사람이 없습니다.
              <br />
              받는 사람을 추가해주세요.
            </Text>
          </GetterList>
        )}
      </SectionWrapper>
    </>
  );
};

export default GroupGettersInfoSection;
