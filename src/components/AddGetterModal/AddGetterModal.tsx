import {
  SectionTitle,
  ModalBackdrop,
  ModalBox,
  Text,
  AddGetterButton,
  CancelButton,
  ConfirmButton,
  ButtonRow,
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
  if (!open) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <SectionTitle>받는 사람</SectionTitle>
        <Text>
          * 최대 10명까지 추가 할 수 있어요.
          <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </Text>
        <AddGetterButton onClick={onClose}>추가하기</AddGetterButton>
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
