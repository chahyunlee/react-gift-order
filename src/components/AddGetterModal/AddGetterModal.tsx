import { useFormContext, useFieldArray } from "react-hook-form";
import GetterInfoSection from "@/sections/GetterInfoSection/GetterInfoSection";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  SectionTitle,
  ModalBackdrop,
  ModalBox,
  Text,
  AddGetterButton,
  CancelButton,
  ConfirmButton,
  ButtonRow,
  GetterList,
} from "@/components/AddGetterModal/AddGetterModal.style";
interface AddGetterModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  completeLabel: string;
}

const AddGetterModal: React.FC<AddGetterModalProps> = ({
  open,
  onClose,
  onConfirm,
  completeLabel,
}) => {
  const { control, clearErrors } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "getters",
  });
  if (!open) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <SectionTitle>받는 사람</SectionTitle>
        <Text>
          * 최대 10명까지 추가 할 수 있어요.
          <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </Text>
        <AddGetterButton
          type="button"
          onClick={() => {
            if (fields.length < 10) {
              append({ name: "", phone: "", quantity: 1 });
              clearErrors(`getters.${fields.length}`);
            }
          }}
        >
          추가하기
        </AddGetterButton>
        <GetterList>
          {fields.map((field, index) => (
            <div key={field.id}>
              <GetterInfoSection index={index} onRemove={() => remove(index)} />
            </div>
          ))}
        </GetterList>
        <ButtonRow>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>
            {completeLabel}명 완료
          </ConfirmButton>
        </ButtonRow>
      </ModalBox>
    </ModalBackdrop>
  );
};

export default AddGetterModal;
