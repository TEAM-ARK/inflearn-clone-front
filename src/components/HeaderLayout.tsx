import { FC } from 'react';
import { AppBar } from '@material-ui/core';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <AppBar position="static" color="default">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/signup">
        <a>SignUp</a>
      </Link>
    </AppBar>
  );
};

export default Header;
