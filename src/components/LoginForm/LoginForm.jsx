import { LogIn, Label, Form, Input, Button } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth.thunk';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <LogIn>Log in</LogIn>
      <Label>
        Email
        <Input type="email" name="email" placeholder="example@mail.com" autoComplete="off" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="examplepwd12345" autoComplete="off" />
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};