import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Typography, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AxiosError } from 'axios';
import Head from 'next/head';
import Router from 'next/router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import DividerWithText from '@components/DividerWithText';
import SignUpForm from '@components/SignUpForm';
import AppLayout from '@layouts/AppLayout';
import { createSignup } from '@utils/fetcher';
import { ISignup } from '../types';

const useStyles = makeStyles({
  signUpContainer: {
    marginTop: '120px',
    width: '380px',
  },
  bold: {
    fontWeight: 'bold',
  },
  submit: {
    height: '50px',
    marginTop: '15px',
    marginBottom: '15px',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  policySize: {
    fontSize: '0.75rem',
  },
});

const schema = yup.object().shape({
  // Error handling with yup library
  email: yup.string().email('이메일 형식이 올바르지 않습니다.').required('필수 정보입니다.'),
  emailConfirm: yup.string().oneOf([yup.ref('email'), null], '이메일이 일치하지 않습니다.'),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/, '조합')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{12,32}/, '길이')
    .required('필수 정보입니다.'),
  // .matches(/(.)\1\1/, '반복')
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
});

export default function SignUp() {
  const [policy, setPolicy] = useState(false);

  const methods = useForm<ISignup>({
    resolver: yupResolver(schema),
  });

  const { signUpContainer, bold, submit, policySize } = useStyles();

  const mutation = useMutation(({ email, password }: ISignup) => createSignup(email, password), {
    onSuccess: (res) => {
      console.log(res);
      Router.replace('/');
    },
    onError: (err: AxiosError) => {
      console.error(err.response?.data);
    },
  });

  const onSubmit: SubmitHandler<ISignup> = ({ email, password }) => {
    mutation.mutate({ email, password });
  };

  const onChangePolicy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPolicy(event.target.checked);
  };

  const termsOfService = () => {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography className={policySize}>
            가입 시, 인프런의{' '}
            <Link
              href="/signup"
              color="secondary"
              underline="none"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-alert
                alert('이용약관 페이지 이동!');
              }}
            >
              이용약관
            </Link>
            {', '}
            <Link
              href="/signup"
              color="secondary"
              underline="none"
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-alert
                alert('개인정보취급방침 페이지 이동!');
              }}
            >
              개인정보취급방침
            </Link>{' '}
            에 동의합니다.
          </Typography>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox size="small" checked={policy} onChange={onChangePolicy} />}
            label={<Typography className={policySize}>인프런의 다양한 소식을 받아보시겠어요?</Typography>}
          />
        </Grid>
      </Grid>
    );
  };

  const snsSignup = () => {
    return <DividerWithText>간편 회원가입</DividerWithText>;
  };

  return (
    <AppLayout>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <main>
        <Container className={signUpContainer} component="section">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Typography className={bold} component="h2" variant="h6">
                회원가입
              </Typography>
              <SignUpForm />
              <Button className={submit} color="primary" size="large" type="submit" fullWidth variant="contained">
                가입하기
              </Button>
            </form>
          </FormProvider>
          {termsOfService()}
          {snsSignup()}
        </Container>
      </main>
    </AppLayout>
  );
}
