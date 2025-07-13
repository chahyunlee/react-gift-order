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
}

const AddGetterModal: React.FC<AddGetterModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  const { control, handleSubmit } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "getters",
  });
  if (!open) return null;

  const onComplete = handleSubmit(
    () => {
      // getters 배열 유효 → 모달 닫기
      onConfirm();
    },
    (errors) => {
      // 실패했을 때 errors 내부에 getters 에러만 없으면 닫기
      if (!errors.getters) {
        onConfirm();
      }
      // 아니면 그냥 에러 메시지 노출
    }
  );
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
          <CancelButton type="button" onClick={onClose}>
            취소
          </CancelButton>
          <ConfirmButton type="button" onClick={onComplete}>
            {fields.length}명 완료
          </ConfirmButton>
        </ButtonRow>
      </ModalBox>
    </ModalBackdrop>
  );
};

export default AddGetterModal;
