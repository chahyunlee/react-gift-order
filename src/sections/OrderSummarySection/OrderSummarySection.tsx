import {
  ProductInfoSection,
  SectionTitle,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  FixedOrderButton,
  SectionDivider,
} from "./OrderSummarySection.style";

interface Product {
  id: number;
  name: string;
  imageURL: string;
  brandInfo: {
    name: string;
  };
  price: {
    sellingPrice: number;
  };
}

interface OrderSummarySectionProps {
  product: Product | undefined;
  totalPrice: number;
  onOrder: () => void;
}

const OrderSummarySection = ({
  product,
  totalPrice,
  onOrder,
}: OrderSummarySectionProps) => {
  return (
    <>
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
      <FixedOrderButton onClick={onOrder}>
        {totalPrice}원 주문하기
      </FixedOrderButton>
    </>
  );
};

export default OrderSummarySection;
