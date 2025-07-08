import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { OrderCardData } from "@/mockdata/ordercardData";
import {
  ImageListWrapper,
  Thumbnail,
  MainImageWrapper,
  MainImage,
  MessageInput,
} from "@/pages/OrderPage/OrderPage.style";
import { useState } from "react";

const OrderPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [message, setMessage] = useState(OrderCardData[0].defaultTextMessage);

  const handleSelectedMessage = (idx: number) => {
    setSelectedIdx(idx);
    setMessage(OrderCardData[idx].defaultTextMessage);
  };

  return (
    <>
      <NavigationBar />
      <ImageListWrapper>
        {OrderCardData.map((item, idx) => (
          <Thumbnail
            key={item.id || idx}
            src={item.thumbUrl}
            selected={selectedIdx === idx}
            onClick={() => handleSelectedMessage(idx)}
          />
        ))}
      </ImageListWrapper>
      <MainImageWrapper>
        <MainImage src={OrderCardData[selectedIdx].imageUrl} />
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력해주세요."
        />
      </MainImageWrapper>
    </>
  );
};

export default OrderPage;
