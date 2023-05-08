import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { logOut } from 'redux/Auth/auth.thunk';
import { Button, UserMenuTitle, Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserMenuTitle>Welcome, {user.name} </UserMenuTitle>
      <Button onClick={() => dispatch(logOut())}>Log Out</Button>
    </Container>
  );
};