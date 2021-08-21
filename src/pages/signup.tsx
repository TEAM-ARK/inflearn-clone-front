import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Typography, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import DividerWithText from '@components/DividerWithText';
import SignUpForm from '@components/SignUpForm';
import AppLayout from '@layouts/AppLayout';

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
  policy: {
    fontSize: '0.75rem',
  },
});

interface IFormInputs {
  email: string;
  password: string;
}

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

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('form data', data);
  };

  const onChangePolicy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPolicy(event.target.checked);
  };

  return (
    <AppLayout>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <main>
        <Container className={classes.signUpContainer} component="section">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Typography className={classes.bold} component="h2" variant="h6">
                회원가입
              </Typography>
              <SignUpForm />
              <Button
                className={classes.submit}
                color="primary"
                size="large"
                type="submit"
                fullWidth
                variant="contained"
              >
                가입하기
              </Button>
            </form>
          </FormProvider>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography className={classes.policy}>
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
                label={<Typography className={classes.policy}>인프런의 다양한 소식을 받아보시겠어요?</Typography>}
              />
            </Grid>
          </Grid>
          <DividerWithText>간편 회원가입</DividerWithText>
        </Container>
      </main>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  // Check if the user signed in or not to enter this page
  // Pass data to the page via props
  return { props: {} };
}
