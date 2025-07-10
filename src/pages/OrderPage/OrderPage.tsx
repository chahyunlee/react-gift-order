import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
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
  FixedOrderButton,
} from "@/pages/OrderPage/OrderPage.style";
import { useInput } from "@/hooks/useInput";
import {
  checkNameValidation,
  checkPhoneValidation,
  checkMessageValidation,
} from "@/utils/checkValidation";

const OrderPage = () => {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const product = cardData.find((item) => String(item.id) === String(id));
  const sellingPrice = product?.price?.sellingPrice ?? 0;
  const totalPrice = sellingPrice * quantity;

  const senderNameInput = useInput({ validation: checkNameValidation });
  const getterNameInput = useInput({ validation: checkNameValidation });
  const getterPhoneInput = useInput({ validation: checkPhoneValidation });
  const messageInput = useInput({
    initialValue: OrderCardData[0].defaultTextMessage,
    validation: checkMessageValidation,
  });

  const handleSelectedMessage = (idx: number) => {
    setSelectedIdx(idx);
    messageInput.handleInput(OrderCardData[idx].defaultTextMessage);
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

  const handleOrder = () => {
    senderNameInput.handleBlur();
    getterNameInput.handleBlur();
    getterPhoneInput.handleBlur();
    messageInput.handleBlur();

    const senderNameError = checkNameValidation(senderNameInput.value);
    const getterNameError = checkNameValidation(getterNameInput.value);
    const getterPhoneError = checkPhoneValidation(getterPhoneInput.value);
    const messageError = checkMessageValidation(messageInput.value);

    if (
      senderNameError ||
      getterNameError ||
      getterPhoneError ||
      messageError
    ) {
      return;
    }

    window.alert(
      `주문이 완료되었습니다.\n` +
        `상품명: ${product?.name}\n` +
        `구매 수량: ${quantity}\n` +
        `발신자 이름: ${senderNameInput.value}\n` +
        `메시지: ${messageInput.value}`
    );
    navigate("/", { replace: true });
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
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>보내는 사람</SectionTitle>
        <InputRow>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            value={senderNameInput.value}
            onChange={(e) => senderNameInput.handleInput(e.target.value)}
            onBlur={senderNameInput.handleBlur}
            style={
              senderNameInput.error && senderNameInput.touched
                ? { borderColor: "#ff3b30" }
                : {}
            }
          />
        </InputRow>
        <SectionDescription>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </SectionDescription>
        {senderNameInput.error && senderNameInput.touched && (
          <SectionDescription style={{ color: "#ff3b30" }}>
            {senderNameInput.error}
          </SectionDescription>
        )}
      </SectionWrapper>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>받는 사람</SectionTitle>
        <InputRow>
          <InputLabel>이름</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              id="getterName"
              type="text"
              placeholder="이름을 입력하세요."
              value={getterNameInput.value}
              onChange={(e) => getterNameInput.handleInput(e.target.value)}
              onBlur={getterNameInput.handleBlur}
              style={
                getterNameInput.error && getterNameInput.touched
                  ? { borderColor: "#ff3b30" }
                  : {}
              }
            />
            {getterNameInput.error && getterNameInput.touched && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {getterNameInput.error}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>전화번호</InputLabel>
          <div style={{ flex: 1 }}>
            <Input
              id="getterPhone"
              type="text"
              placeholder="전화번호를 입력하세요."
              value={getterPhoneInput.value}
              onChange={(e) => getterPhoneInput.handleInput(e.target.value)}
              onBlur={getterPhoneInput.handleBlur}
              style={
                getterPhoneInput.error && getterPhoneInput.touched
                  ? { borderColor: "#ff3b30" }
                  : {}
              }
            />
            {getterPhoneInput.error && getterPhoneInput.touched && (
              <SectionDescription
                style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
              >
                {getterPhoneInput.error}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>수량</InputLabel>
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
                상품가 <b>{product.price.sellingPrice}원</b>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        )}
      </ProductInfoSection>
      <FixedOrderButton onClick={handleOrder}>
        {totalPrice}원 주문하기
      </FixedOrderButton>
    </>
  );
};

export default OrderPage;
