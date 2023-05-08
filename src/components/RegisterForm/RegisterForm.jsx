import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth.thunk';
import { Form, SignUp, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <Form onSubmit={handleSubmit}>
        <SignUp>Sign up</SignUp>

        <Label>
          Name
          <Input type="text" name="name" placeholder="Username" autoComplete="off" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder="example@mail.com" autoComplete="off" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="examplepwd12345" autoComplete="off" />
        </Label>
        <Button type="submit">Register</Button>
        </Form>
  );
};
