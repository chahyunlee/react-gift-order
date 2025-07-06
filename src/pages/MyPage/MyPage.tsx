import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Title, Description, LogoutButton } from "@/pages/MyPage/MyPage.style";

const MyPage = () => {
  return (
    <>
      <NavigationBar />
      <Title>마이페이지</Title>
      <Description>
        사용자님 안녕하세요!
        <br />
        이메일 주소는 사용자이메일입니다.
      </Description>
      <LogoutButton>로그아웃</LogoutButton>
    </>
  );
};

export default MyPage;
