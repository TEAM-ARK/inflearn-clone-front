import { ReactNode } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(12).max(32).required(),
});

export default function Signup(): ReactNode {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data', data);
  };

  return (
    <>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <nav>nav</nav>
      <main>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <input {...register('email')} />
          <br />
          <br />
          <input {...register('password')} />
          <br />
          <br />
          <input type="submit" />
        </form>
      </main>
      <footer>footer</footer>
    </>
  );
}
