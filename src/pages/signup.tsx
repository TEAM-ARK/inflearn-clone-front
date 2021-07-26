import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Typography, FormControlLabel, Checkbox, Grid, Divider } from '@material-ui/core';
import Head from 'next/head';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import SignUpForm from '@components/SignUpForm';
import useStyles from '@styles/styles';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(12).max(32).required(),
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPolicy(event.target.checked);
  };

  return (
    <>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <main>
        <FormProvider {...methods}>
          <Container className={classes.signUpContainer} component="section">
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
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography className={classes.policy}>
                    가입 시, 인프런의 이용약관, 개인정보취급방침 에 동의합니다.
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox size="small" checked={policy} onChange={handleChange} />}
                    label={<Typography className={classes.policy}>인프런의 다양한 소식을 받아보시겠어요?</Typography>}
                  />
                </Grid>
              </Grid>
            </form>
          </Container>
        </FormProvider>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Check if the user signed in or not to enter this page
  // Pass data to the page via props
  return { props: {} };
}
