import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { cardData } from "@/mockdata/cardData";
import { OrderCardData } from "@/mockdata/ordercardData";
import { useInput } from "@/hooks/useInput";
import {
  checkNameValidation,
  checkPhoneValidation,
  checkMessageValidation,
} from "@/utils/checkValidation";
import CardSelectionSection from "@/sections/CardSelectionSection/CardSelectionSection";
import SenderInfoSection from "@/sections/SenderInfoSection/SenderInfoSection";
import GetterInfoSection from "@/sections/GetterInfoSection/GetterInfoSection";
import GroupGettersInfoSection from "@/sections/GroupGettersInfoSection/GroupGettersInfoSection";
import OrderSummarySection from "@/sections/OrderSummarySection/OrderSummarySection";

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
      <CardSelectionSection
        selectedIdx={selectedIdx}
        onSelectedMessage={handleSelectedMessage}
        messageInput={messageInput}
      />
      <SenderInfoSection senderNameInput={senderNameInput} />
      <GetterInfoSection
        getterNameInput={getterNameInput}
        getterPhoneInput={getterPhoneInput}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        onQuantityBlur={handleQuantityBlur}
      />
      <GroupGettersInfoSection />
      <OrderSummarySection
        product={product}
        totalPrice={totalPrice}
        onOrder={handleOrder}
      />
    </>
  );
};

export default OrderPage;
