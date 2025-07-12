import { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <InputRow>
          <SectionTitle>받는 사람</SectionTitle>
          <AddGetterButton onClick={() => setIsModalOpen(true)}>
            추가
          </AddGetterButton>
          <AddGetterModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          ></AddGetterModal>
        </InputRow>
        <GetterList>
          <Text>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </Text>
        </GetterList>
      </SectionWrapper>
    </>
  );
};

export default GroupGettersInfoSection;
