'use client';

import React, { useState, useRef, useContext } from 'react';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ModalContext } from '@/components/modal-provider';

export default function Join() {
  const { state, dispatch } = useContext(ModalContext);
  const router = useRouter();

  const inputPassword = useRef<any>(null);
  const inputEmail = useRef<any>(null);
  const inputId = useRef<any>(null);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const checkSpecial = () => {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/;
    if (reg.test(password)) {
      return true;
    }
    return false;
  };

  const checkEmail = () => {
    const reg = /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i;
    if (reg.test(email)) return true;
    return false;
  };

  const checkLowercase = () => {
    const reg = /[a-z]+/;
    if (reg.test(password)) return true;
    return false;
  };

  const checkUppercase = () => {
    const reg = /[A-Z]+/;
    if (reg.test(password)) return true;
    return false;
  };

  const ClickEvent = () => {
    let chk = true;
    if (id.length === 0) {
      inputId.current.focus();
      chk = false;
      dispatch({ type: 'JOIN_FAIL', payload: '아이디를 입력해주세요.' });
    }
    if (
      password.length < 8 ||
      !checkSpecial() ||
      !checkLowercase() ||
      !checkUppercase()
    ) {
      inputPassword.current.focus();
      chk = false;
      dispatch({
        type: 'JOIN_FAIL',
        payload:
          '비밀번호는 소문자, 대문자, 특수문자 포함 8자 이상으로 이루어져야 합니다.',
      });
    }
    if (!checkEmail()) {
      inputEmail.current.focus();
      chk = false;
      dispatch({ type: 'JOIN_FAIL', payload: '이메일 형식이 아닙니다.' });
    }
    if (chk) {
      console.log('회원가입 성공');
      router.push('/');
    }
  };

  const onChangeId = (e: React.ChangeEvent<any>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col w-64 content-center">
      <TextField label="ID" inputRef={inputId} onChange={onChangeId} />
      <TextField
        label="Password"
        type="password"
        inputRef={inputPassword}
        onChange={onChangePassword}
      />
      <TextField
        label="Email Address"
        inputRef={inputEmail}
        onChange={onChangeEmail}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={ClickEvent}
      >
        Sign Up
      </Button>
    </div>
  );
}
