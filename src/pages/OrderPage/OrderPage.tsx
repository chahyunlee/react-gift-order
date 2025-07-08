import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useParams } from "react-router-dom";
import { cardData } from "@/mockdata/cardData";
import { OrderCardData } from "@/mockdata/ordercardData";
import {
  ImageListWrapper,
  Thumbnail,
  MainImageWrapper,
  MainImage,
  MessageInput,
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  InputRow,
  InputLabel,
  Input,
  SectionDivider,
  ProductInfoSection,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductBrand,
  ProductPrice,
} from "@/pages/OrderPage/OrderPage.style";
import { useState } from "react";

const OrderPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [message, setMessage] = useState(OrderCardData[0].defaultTextMessage);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const product = cardData.find((item) => String(item.id) === String(id));

  const handleSelectedMessage = (idx: number) => {
    setSelectedIdx(idx);
    setMessage(OrderCardData[idx].defaultTextMessage);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(1);
    }
  };

  const handleQuantityBlur = () => {
    if (!quantity || quantity < 1) setQuantity(1);
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
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>보내는 사람</SectionTitle>
        <InputRow>
          <Input type="text" placeholder="이름을 입력하세요." />
        </InputRow>
        <SectionDescription>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </SectionDescription>
      </SectionWrapper>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>받는 사람</SectionTitle>
        <InputRow>
          <InputLabel htmlFor="getterName">이름</InputLabel>
          <Input id="getterName" type="text" placeholder="이름을 입력하세요." />
        </InputRow>
        <InputRow>
          <InputLabel htmlFor="getterPhone">전화번호</InputLabel>
          <Input
            id="getterPhone"
            type="text"
            placeholder="전화번호를 입력하세요."
          />
        </InputRow>
        <InputRow>
          <InputLabel htmlFor="getterCount">수량</InputLabel>
          <Input
            id="getterCount"
            type="number"
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
            onBlur={handleQuantityBlur}
          />
        </InputRow>
      </SectionWrapper>
      <SectionDivider />
      <ProductInfoSection>
        <SectionTitle>상품 정보</SectionTitle>
        {product && (
          <ProductCard>
            <ProductImage src={product.imageURL} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductBrand>{product.brandInfo.name}</ProductBrand>
              <ProductPrice>
                상품가 <b>{product.price.sellingPrice.toLocaleString()}원</b>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        )}
      </ProductInfoSection>
    </>
  );
};

export default OrderPage;
