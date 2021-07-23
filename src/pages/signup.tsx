import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Grid, Typography } from '@material-ui/core';
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
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('form data', data);
  };

  return (
    <>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <main>
        <FormProvider {...methods}>
          <Container component="section" maxWidth="xs">
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Typography className={classes.bold} component="h2" variant="h6">
                회원가입
              </Typography>
              <SignUpForm />
              <Button type="submit" fullWidth variant="outlined">
                가입하기
              </Button>
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
