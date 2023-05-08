import { PhoneTitle, Loader, MessageUser } from './Contacts.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { fetchContacts } from "../../redux/Contact/operations";
import { getAllContacts, selectError, selectIsLoading } from '../../redux/Contact/selectors';


export default function Contacts() {
  const contacts = useSelector(getAllContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div >
        <PhoneTitle>Phonebook</PhoneTitle>
        <ContactForm />
        <PhoneTitle>Contacts</PhoneTitle>
        <Filter />
        {isLoading&&!error?<Loader><ThreeDots /></Loader>:<ContactList />}
        {!contacts.length && <MessageUser>There are no contacts in the Phonebook</MessageUser>}
      </div>
    </div>
  );
};
