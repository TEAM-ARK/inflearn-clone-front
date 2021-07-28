import React from 'react';
import { Avatar, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
  border: {
    borderBottom: '1px solid #ABB0B5',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    fontWeight: 500,
    fontSize: 11,
    color: '#ABB0B5',
    width: '60%',
    textAlign: 'center',
  },
  center: {
    padding: 0,
    textAlign: 'center',
  },
}));

interface IProps {
  children: React.ReactNode;
}

export default function DividerWithText({ children }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.border} />
        <span className={classes.content}>{children}</span>
        <div className={classes.border} />
      </div>
      <Container className={classes.center}>
        <Button
          startIcon={
            <Avatar
              alt="kakao"
              variant="rounded"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg"
            />
          }
        />
        <Button
          startIcon={
            <Avatar
              alt="google"
              variant="rounded"
              src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png"
            />
          }
        />
        <Button
          startIcon={
            <Avatar
              alt="github"
              variant="rounded"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            />
          }
        />
        <Button
          startIcon={
            <Avatar
              alt="facebook"
              variant="rounded"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
            />
          }
        />
        <Button
          startIcon={
            <Avatar
              alt="apple"
              variant="rounded"
              src="data:image/png;base64,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"
            />
          }
        />
      </Container>
    </>
  );
}
