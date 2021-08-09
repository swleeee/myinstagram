import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import facebookImg from '../../public/static/images/signup/facebook_white.png';
import AppImg1 from '../../public/static/images/App1.png';
import AppImg2 from '../../public/static/images/App2.png';

function signin(props) {
  const signupHandler = () => {
    console.log('click');

    const textbox = {
      userInfo: '22233334444',
      userName: '권선구',
      userId: 'bbb',
      password: 'sdfsdfsdff',
    };

    fetch('http://localhost:3003/signup', {
      method: 'POST', //통신방법
      headers: {
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin': {
        //   type: 'string',
        // },
        'Access-Control-Allow-Origin': '*',
      },

      body: JSON.stringify(textbox),
    });
    // .then((res) => res.json())
    // .then((json) => {
    //   console.log(json);
    //   // this.setState({
    //   //   text: json.text,
    //   // });
    // });
  };
  return (
    <Container>
      <MainBox>
        <Logo>Instagram</Logo>

        <MainItem>
          <Description>친구들의 사진과 동영상을 보려면 가입하세요</Description>

          <Facebook>
            <Img src={facebookImg} width={18} height={18} />

            <span>Facebook으로 로그인</span>
          </Facebook>
          <Or>
            {' '}
            <div></div>
            <span>또는</span>
            <div></div>{' '}
          </Or>

          <input placeholder="휴대폰 번호 또는 이메일 주소" />
          <input placeholder="성명" />
          <input placeholder="사용자 이름" />
          <input placeholder="비밀번호" />
          <SignUp>
            <Register onClick={() => signupHandler()}>가입</Register>

            {/* <Forget>비밀번호를 잊으셨나요?</Forget> */}
          </SignUp>
        </MainItem>
      </MainBox>
      <SubBox>
        <span>계정이 있으신가요?</span>
        <Link href="/" passHref>
          <Login href="/">로그인</Login>
        </Link>
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

export default signin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const MainBox = styled.div`
  width: 350px;
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
  padding-top: 20px;
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
      color: #888888;
    }
  }

  > input:nth-of-type(1),
  input:nth-of-type(2),
  input:nth-of-type(3) {
    margin-bottom: 8px;
  }
`;
const Description = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 20px;
  word-break: keep-all;
`;
const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Register = styled.button`
  margin-top: 15px;
  margin-bottom: 20px;
  width: 100%;
  background-color: #b2dffc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
`;
const Or = styled.div`
  width: 100%;
  margin: 15px 0;
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
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  background-color: #0095f6;
  border-radius: 5px;
  height: 32px;
  > span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #ffffff;
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
  width: 350px;
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

const Login = styled.a`
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
