import { TextField, Container, Grid } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

export default function SignUpForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            autoComplete="email"
            fullWidth
            autoFocus
            type="email"
            label="이메일"
            variant="outlined"
            error={errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
      <Controller
        name="email-confirm"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            autoComplete="email"
            type="email"
            label="이메일 확인"
            variant="outlined"
            error={errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            autoComplete="new-password"
            type="password"
            label="비밀번호"
            variant="outlined"
            error={errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      />
      <Controller
        name="password-confirm"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            autoComplete="new-password"
            type="password"
            label="비밀번호 확인"
            variant="outlined"
            error={errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      />
    </>
  );
}
