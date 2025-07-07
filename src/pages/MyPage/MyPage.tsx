import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "@/routes/path";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Title, Description, LogoutButton } from "@/pages/MyPage/MyPage.style";

const MyPage = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate(RouterPath.LOGIN);
    }
  }, [auth, navigate]);

  if (!auth?.user) return null;

  return (
    <>
      <NavigationBar />
      <Title>마이페이지</Title>
      <Description>
        사용자님 안녕하세요!
        <br />
        이메일 주소는 사용자이메일입니다.
      </Description>
      <LogoutButton
        onClick={() => {
          auth.logout();
          navigate(RouterPath.LOGIN);
        }}
      >
        로그아웃
      </LogoutButton>
    </>
  );
};

export default MyPage;
