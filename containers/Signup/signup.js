import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import facebookImg from '../../public/static/images/signup/facebook_white.png';
import AppImg1 from '../../public/static/images/App1.png';
import AppImg2 from '../../public/static/images/App2.png';

function signin(props) {
  // const [userInfo, setUserInfo] = useState();
  // const [isUserInfo, setIsUserInfo] = useState(0);
  // const [userName, setUserName] = useState();
  // const [isUserName, setIsUserName] = useState(0);
  // const [userId, setUserId] = useState();
  // const [isUserId, setIsUserId] = useState(0);
  // const [password, setPassword] = useState();
  // const [isPassword, setIsPassword] = useState(0);

  /* 
    input box의 상태값 저장 
    text : 어떤 종류의 input box인가
    src : 올바르게 작성되었는지 확인하는 이미지의 주소 
    value : input box에 작성된 text 값
    isValue : 올바르게 작성되었다면 1(true), 아니면 0(false)
  */
  const [input, setInput] = useState([
    {
      index: 0,
      text: 'userInfo',
      src: '/static/images/signup/no.png',
      value: '',
      isValue: 0,
    },
    {
      index: 1,
      text: 'userName',
      src: '/static/images/signup/no.png',
      value: '',
      isValue: 0,
    },
    {
      index: 2,
      text: 'userId',
      src: '/static/images/signup/no.png',
      value: '',
      isValue: 0,
    },
    {
      index: 3,
      text: 'password',
      src: '/static/images/signup/no.png',
      value: '',
      isValue: 0,
    },
  ]);

  // 이메일 체크 정규식
  const existEmail = (asValue) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    console.log(regExp.test(asValue));
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  };

  // 핸드폰 번호 체크 정규식
  const existCelluar = (asValue) => {
    var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    console.log(regExp.test(asValue));
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  };

  const existUserId = (asValue) => {
    var regExp = /^[A-Za-z0-9_.+]*$/;
    console.log(regExp.test(asValue));
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  };

  //비밀번호 체크 정규식
  //조건1. 6~20 영문 대소문자
  //조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
  const existPassword = (asValue) => {
    var regExp = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
    console.log(regExp.test(asValue));
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  };

  const onChangeHandler = (data) => {
    console.log(input);
    let newArray = [...input];
    console.log(newArray);

    /* 
      input box의 값이 변경될 때마다 해당 값이 저장되고 정규식을 통해 검사하여 올바르게 작성되었는지 확인
    */
    input.map((item, idx) => {
      if (data.name === item.text) {
        newArray[idx].value = data.value;
        if (idx === 0) {
          newArray[idx].isValue =
            existCelluar(data.value) || existEmail(data.value);
        } else if (idx === 1) {
          newArray[idx].isValue = data.value ? true : false;
        } else if (idx === 2) {
          newArray[idx].isValue = existUserId(data.value);
        } else {
          newArray[idx].isValue = existPassword(data.value);
        }
        if (newArray[idx].isValue) {
          newArray[idx].src = '/static/images/signup/ok.png';
        } else {
          newArray[idx].src = '/static/images/signup/no.png';
        }

        setInput(newArray);
      } else {
        // setInput(item);
      }
    });

    // switch (data.name) {
    //   case 'userInfo':
    //     setUserInfo(data.value);
    //     // existCelluar(data.value);
    //     // existEmail(data.value);
    //     setIsUserInfo(existCelluar(data.value) || existEmail(data.value));
    //     changeImage(0);
    //     setSrc();
    //     break;
    //   case 'userName':
    //     setUserName(data.value);
    //     break;
    //   case 'userId':
    //     setUserId(data.value);
    //     existUserId(data.value);
    //     break;
    //   case 'password':
    //     setPassword(data.value);
    //     existPassword(data.value);
    //     break;
    // }
    // console.log(data.value);
    // console.log(isUserInfo);
    // // console.log(src[3]);
    // setTimeout(() => {
    //   console.log(isUserInfo);
    // }, 3000);
  };
  const signupHandler = () => {
    console.log('click');
    // console.log(userInfo);
    console.log(input);

    // const textbox = {
    //   userInfo: '22233334444',
    //   userName: '권선구',
    //   userId: 'bbb',
    //   password: 'sdfsdfsdff',
    // };

    // const user = {
    //   userInfo: userInfo,
    //   userName: userName,
    //   userId: userId,
    //   password: password,
    // };

    const user = {
      userInfo: input[0].value,
      userName: input[1].value,
      userId: input[2].value,
      password: input[3].value,
    };
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

          <Input value={userInfo} check={isUserInfo}>
            <input
              placeholder="휴대폰 번호 또는 이메일 주소"
              name="userInfo"
              onChange={(e) => onChangeHandler(e.target)}
              // value="휴대폰 번호 또는 이메일 주소"
            />
            <div>휴대폰 번호 또는 이메일 주소</div>
            <div>
              <InnerImg
                check={isUserInfo}
                src={input[0].src}
                width={22}
                height={22}
              />
            </div>
          </Input>

          <Input value={userName}>
            <input
              placeholder="성명"
              name="userName"
              onChange={(e) => onChangeHandler(e.target)}
            />
            <div>성명</div>
            <div>
              <InnerImg
                check={isUserInfo}
                src={input[1].src}
                width={22}
                height={22}
              />
            </div>
          </Input>
          <Input value={userId}>
            <input
              placeholder="사용자 이름"
              name="userId"
              onChange={(e) => onChangeHandler(e.target)}
            />
            <div>사용자 이름</div>
            <div>
              <InnerImg
                check={isUserInfo}
                src={input[2].src}
                width={22}
                height={22}
              />
            </div>
          </Input>
          <Input value={password}>
            <input
              placeholder="비밀번호"
              name="password"
              onChange={(e) => onChangeHandler(e.target)}
              type="password"
            />
            <div>비밀번호</div>
            <div>
              <InnerImg
                check={isUserInfo}
                src={input[3].src}
                width={22}
                height={22}
              />
            </div>
          </Input>
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
  position: relative;
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
const Input = styled.div`
  // border: 3px solid red;
  border: ${(props) => (props.check ? '3px solid red' : 'none')};
  position: relative;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  > div:nth-of-type(1) {
    display: ${(props) => (props.value ? 'block' : 'none')};
    position: absolute;
    top: 3px;
    left: 0;
    font-size: 11px;
    padding-left: 8px;
    box-sizing: border-box;
    color: #8e8e8e;
  }
  > div:nth-of-type(2) {
    // width: 22px;
    // height: 22px;
    // border: 3px solid blue;
    position: absolute;
    top: 30%;
    right: 3%;
  }

  // > img {
  //   position: absolute;
  //   right: 5%;
  //   top: 25%;
  // }
  > input {
    width: 100%;
    // height: 100%;
    font-size: ${(props) => (props.value ? '12px' : '16px')};
    background-color: #fafafa;
    color: #262626;
    border: 1px solid #cccccc;
    padding: ${(props) => (props.value ? '20px 0 7px 8px' : '9px 0 7px 8px')};
    box-sizing: border-box;

    :focus {
      outline: none;
      ::placeholder {
        opacity: 1;
      }
    }

    ::placeholder {
      font-size: 12px;
      color: #888888;
      position: absolute;
      opacity: 0.5;
    }
  }
  margin-bottom: 8px;
  // > input:nth-of-type(1),
  // input:nth-of-type(2),
  // input:nth-of-type(3) {
  //   margin-bottom: 8px;
  // }
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

const InnerImg = styled(Image)`
  border: 1px solid red;
  width: 16px;
  height: 16px;
  > img {
    border: 1px solid red;
    width: 16px;
    height: 16px;
    src: ${(props) =>
      props.check
        ? '/static/images/signup/ok.png'
        : '/static/images/signup/no.png'};
  }
`;
