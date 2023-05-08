import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contact/operations';
import { getAllContacts } from 'redux/Contact/selectors';

export const ContactList = () => {
    const contacts = useSelector(getAllContacts);
    const dispatch = useDispatch();

    return (
        <>
            <List >
                {contacts.map(({ name, id, number }) => {
                    return (
                        <Item
                            key={id}>
                            {name} : {number}
                            <Button
                                type="button"
                                onClick={() => dispatch(deleteContact(id))}
                            >
                                Delete
                            </Button>
                        </Item>
                    );
                })}
            </List>
        </>
    );
};
