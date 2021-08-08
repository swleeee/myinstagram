import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countPlusAction, countMinusAction } from '../../reducers/count';
import styled from 'styled-components';

import LoginContainer from './login';

function index(props) {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  const count = useSelector((state) => state.count); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.

  const onClickPlus = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(countPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);
  return (
    <div>
      <LoginContainer />
      <div style={{ border: '1px solid red' }}>
        카운트 : {count}
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </div>
    </div>
  );
}

export default index;
