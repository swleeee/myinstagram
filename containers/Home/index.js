import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import facebookImg from '../../public/static/images/facebook.png';
import AppImg1 from '../../public/static/images/App1.png';
import AppImg2 from '../../public/static/images/App2.png';

function index(props) {
  return (
    <Container>
      <MainBox>
        <Logo>Instagram</Logo>
        {/* <Description>친구들의 사진과 동영상을 보려면 가입하세요</Description> */}
        <MainItem>
          <input placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input placeholder="비밀번호" />
          <SignIn>
            <Login>로그인</Login>
            <Or>
              {' '}
              <div></div>
              <span>또는</span>
              <div></div>{' '}
            </Or>
            <Facebook>
              <Img src={facebookImg} width={18} height={18} />

              <span>Facebook으로 로그인</span>
            </Facebook>
            <Forget>비밀번호를 잊으셨나요?</Forget>
          </SignIn>
        </MainItem>
      </MainBox>
      <SubBox>
        <span>계정이 없으신가요?</span>
        <SignUp>가입하기</SignUp>
      </SubBox>
      <Footer>
        <span>앱을 다운로드하세요.</span>
        <App>
          <div>
            <Img src={AppImg1} width={136} height={40} />
          </div>
          <div>
            <Img src={AppImg2} width={136} height={40} />
          </div>
        </App>
      </Footer>
    </Container>
  );
}

export default index;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const MainBox = styled.div`
  width: 380px;
  // height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding: 20px 0;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: 'Billabong', sans-serif;
  font-size: 54px;
  // line-height: 18px;
  color: #262626;
  font-weight: bold;
  text-align: center;
`;
const MainItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  box-sizing: border-box;

  > input {
    font-size: 16px;
    background-color: #fafafa;
    color: #262626;
    border: 1px solid #cccccc;
    padding: 9px 0 7px 8px;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 12px;
      color: #aaaaaa;
    }
  }

  > input:nth-of-type(1) {
    margin-bottom: 8px;
  }
`;
const Description = styled.div``;
const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Login = styled.button`
  margin-top: 15px;
  width: 100%;
  background-color: #b2dffc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
`;
const Or = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    border: 1px solid #dddddd;
    width: 100%;
    height: 0;
  }
  > span {
    width: 50%;
    text-align: center;
    display: inline-block;
    margin: 0 20px;
    color: #8e8e8e;
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
  }
`;
const Facebook = styled.div`
  display: flex;
  margin: 25px 0;
  > span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #385185;
  }
`;
const Forget = styled.button`
  // margin-top: 15px;
  width: 100%;
  background-color: #ffffff;
  color: #385185;
  border: none;
  // border-radius: 5px;
  // height: 30px;
`;
const SubBox = styled.div`
  margin-top: 10px;
  width: 380px;
  // height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding: 20px 0;
  box-sizing: border-box;

  > span {
    font-size: 14px;
    line-height: 18px;
    color: #262626;
    margin-right: 5px;
  }
`;

const SignUp = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #0095f6;
`;
const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    color: #262626;
  }
`;

const App = styled.div`
  display: flex;
  justify-content: center;
  > div:nth-of-type(1) {
    margin-right: 5px;
  }
  > div:nth-of-type(2) {
    margin-left: 5px;
  }
`;

const Img = styled(Image)`
  border: 1px solid red;
  width: 16px;
  height: 16px;
  > img {
    border: 1px solid red;
    width: 16px;
    height: 16px;
  }
`;
