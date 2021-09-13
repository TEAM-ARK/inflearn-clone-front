import React, { useState } from 'react';
import { TextField, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { AxiosError } from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import { useMutation } from 'react-query';
import DividerWithText from '@components/DividerWithText';
import { requestLogin } from '@utils/fetcher';
import useInput from '@utils/useInput';
import { ILogin } from '../types';

const useStyles = makeStyles({
  loginModal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: '380px',
    height: '460px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '24px',
    margin: 'auto',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    margin: '12px 0 12px',
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submitBtn: {
    height: '50px',
    marginTop: '15px',
    marginBottom: '15px',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  navContent: {
    color: '#616568',
    borderBottom: '1px solid #858a8d',
    cursor: 'pointer',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: 1.38,
    letterSpacing: '-.3px',
  },
  navSignup: {
    marginLeft: '16px',
    '&::after': {
      position: 'relative',
      display: 'inline-block',
      right: '59px',
      width: '1px',
      height: '10px',
      backgroundColor: '#858a8d',
      content: '""',
      pointerEvents: 'none',
    },
  },
});

interface IProps {
  handleFindPasswordModal: () => void;
  onClose: () => void;
}

export default function LoginModal({ handleFindPasswordModal, onClose }: IProps) {
  const { loginModal, logo, closeBtn, submitBtn, nav, navContent, navSignup } = useStyles();

  const [showPassword, setShowPassword] = useState(true);
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');

  // eslint-disable-next-line no-shadow
  const mutation = useMutation(({ email, password }: ILogin) => requestLogin(email, password), {
    onSuccess: (res) => {
      console.log(res);
      Router.replace('/');
    },
    onError: (err: AxiosError) => {
      console.error(err.response?.data);
    },
  });

  const closeIcon = () => {
    return (
      <span className={closeBtn}>
        <button type="button" onClick={onClose}>
          <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 12 12">
            <path
              fill="#3E4042"
              fillRule="evenodd"
              d="M.203.203c.27-.27.708-.27.979 0L6 5.02 10.818.203c.27-.27.709-.27.98 0 .27.27.27.708 0 .979L6.978 6l4.818 4.818c.27.27.27.709 0 .98-.27.27-.709.27-.979 0L6 6.978l-4.818 4.818c-.27.27-.709.27-.98 0-.27-.27-.27-.709 0-.979L5.022 6 .203 1.182c-.27-.27-.27-.709 0-.98z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
    );
  };

  const inflearnLogo = () => {
    return (
      <span className={logo}>
        <svg width="110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 90">
          <path
            fill="#1dc078"
            d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"
          />
          <path
            fill="#1dc078"
            d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"
          />
          <path
            fill="#1dc078"
            d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"
          />
          <title>인프런 브랜드 로고</title>
        </svg>
      </span>
    );
  };

  const snsLogin = () => {
    return <DividerWithText>간편 로그인</DividerWithText>;
  };

  const onShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  const loginInputs = () => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          autoComplete="text"
          fullWidth
          autoFocus
          type="text"
          label="이메일"
          variant="outlined"
          placeholder="이메일 또는 아이디 입력"
          onChange={handleChangeEmail}
        />
        <TextField
          margin="normal"
          autoComplete="password"
          fullWidth
          type={showPassword ? 'password' : 'text'}
          label="비밀번호"
          variant="outlined"
          placeholder="비밀번호"
          onChange={handleChangePassword}
          InputProps={{
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={onShowPassword} edge="end">
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
        <Button className={submitBtn} color="primary" size="large" type="submit" fullWidth variant="contained">
          로그인
        </Button>
      </form>
    );
  };

  const navBar = () => {
    return (
      <p className={nav}>
        <a href="#" className={navContent} onClick={handleFindPasswordModal}>
          비밀번호 찾기
        </a>
        <span className={`${navContent} ${navSignup}`}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </span>
      </p>
    );
  };

  return (
    <article className={loginModal}>
      {closeIcon()}
      {inflearnLogo()}
      {loginInputs()}
      {navBar()}
      {snsLogin()}
    </article>
  );
}
