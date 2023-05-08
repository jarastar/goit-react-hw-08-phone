import { Route, Routes } from "react-router-dom";
import { useAuth } from 'hooks/hooks';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/auth.thunk';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute component={<Register />} redirectTo="/contacts" />}/>
        <Route path="/login" element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}/>
      </Route>
    </Routes>
  );
};
