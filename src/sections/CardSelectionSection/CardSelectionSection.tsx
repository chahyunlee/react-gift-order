import { OrderCardData } from "@/mockdata/ordercardData";
import { useInput } from "@/hooks/useInput";
import {
  ImageListWrapper,
  Thumbnail,
  MainImageWrapper,
  MainImage,
  MessageInput,
  SectionDescription,
} from "./CardSelectionSection.style";

interface CardSelectionSectionProps {
  selectedIdx: number;
  onSelectedMessage: (idx: number) => void;
  messageInput: ReturnType<typeof useInput>;
}

const CardSelectionSection = ({
  selectedIdx,
  onSelectedMessage,
  messageInput,
}: CardSelectionSectionProps) => {
  return (
    <>
      <ImageListWrapper>
        {OrderCardData.map((item, idx) => (
          <Thumbnail
            key={item.id || idx}
            src={item.thumbUrl}
            selected={selectedIdx === idx}
            onClick={() => onSelectedMessage(idx)}
          />
        ))}
      </ImageListWrapper>
      <MainImageWrapper>
        <MainImage src={OrderCardData[selectedIdx].imageUrl} />
        <MessageInput
          value={messageInput.value}
          onChange={(e) => messageInput.handleInput(e.target.value)}
          onBlur={messageInput.handleBlur}
          placeholder="메시지를 입력해주세요."
          style={
            messageInput.error && messageInput.touched
              ? { borderColor: "#ff3b30" }
              : {}
          }
        />
        {messageInput.error && messageInput.touched && (
          <SectionDescription
            style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
          >
            {messageInput.error}
          </SectionDescription>
        )}
      </MainImageWrapper>
    </>
  );
};

export default CardSelectionSection;
