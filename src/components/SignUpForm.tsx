import React, { useState } from 'react';
import { TextField, IconButton, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Controller, useFormContext } from 'react-hook-form';

const useStyles = makeStyles({
  password: {
    color: grey[500],
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
  passwordError: {
    color: red[500],
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
});

export default function SignUpForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { password, passwordError } = useStyles();

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [focusPassword, setFocusPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onFocusPassword = () => {
    setFocusPassword(true);
  };

  const onBlurPassword = () => {
    setFocusPassword(false);
  };

  const emailInputs = () => {
    return (
      <>
        <Controller
          name="email"
          defaultValue="" // Prevent uncontrolled error
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              autoComplete="email"
              fullWidth
              autoFocus
              type="email"
              label="이메일"
              variant="outlined"
              placeholder="example@inflearn.com"
              error={!!errors.email} // To make boolean
              helperText={errors.email ? errors.email?.message : ''}
            />
          )}
        />
        <Controller
          name="emailConfirm"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              autoComplete="email"
              type="email"
              label="이메일 확인"
              variant="outlined"
              placeholder="example@inflearn.com"
              error={!!errors.emailConfirm}
              helperText={errors.emailConfirm ? errors.emailConfirm?.message : ''}
            />
          )}
        />
      </>
    );
  };

  const checkPassword = () => {
    return (
      focusPassword && (
        <>
          <Typography className={errors.password?.message === '조합' ? passwordError : password}>
            영문 대소문자/숫자/특수 문자 3가지 필수조합
          </Typography>
          <Typography className={errors.password?.message === '길이' ? passwordError : password}>
            12자 이상 32자 이하 입력 (공백 제외)
          </Typography>
          {/* <Typography className={errors.password?.message === '연속' ? classes.passwordError : classes.password}>
            연속 3자 이상 동일한 문자/숫자 제외
          </Typography> */}
        </>
      )
    );
  };

  const passwordInputs = () => {
    return (
      <>
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              autoComplete="new-password"
              type={showPassword ? 'password' : 'text'}
              label="비밀번호"
              onFocus={onFocusPassword}
              onBlur={onBlurPassword}
              variant="outlined"
              placeholder="******"
              error={!!errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton aria-label="toggle password visibility" onClick={onShowPassword} edge="end">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
          )}
        />
        {checkPassword()}
        <Controller
          name="passwordConfirm"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              label="비밀번호 확인"
              autoComplete="new-password"
              type={showConfirmPassword ? 'password' : 'text'}
              variant="outlined"
              placeholder="******"
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm ? errors.passwordConfirm?.message : ''}
              InputProps={{
                endAdornment: (
                  <IconButton aria-label="toggle password visibility" onClick={onShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
          )}
        />
      </>
    );
  };

  return (
    <>
      {emailInputs()}
      {passwordInputs()}
    </>
  );
}
