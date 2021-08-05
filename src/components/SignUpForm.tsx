import { useState } from 'react';
import { TextField, IconButton, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Controller, useFormContext } from 'react-hook-form';
import useStyles from '@styles/styles';

export default function SignUpForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const classes = useStyles();

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

  return (
    <>
      <Controller
        name="email"
        defaultValue=""
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
            error={errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
      <Controller
        name="email-confirm"
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
            error={errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />
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
            error={errors.password}
            helperText={errors.password ? errors.password?.message : ''}
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
      {focusPassword && (
        <Typography className={classes.password}>
          영문 대소문자/숫자/특수 문자 3가지 필수조합
          <br /> 12자 이상 32자 이하 입력 (공백 제외)
          <br /> 연속 3자 이상 동일한 문자/숫자 제외
        </Typography>
      )}
      <Controller
        name="password-confirm"
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
            error={errors.password}
            helperText={errors.password ? errors.password?.message : ''}
            InputProps={{
              endAdornment: (
                <IconButton aria-label="assword visibility" onClick={onShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
            }}
          />
        )}
      />
    </>
  );
}
