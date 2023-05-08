import { TitleHome, Logo } from './Home.styled';
import phonebook from 'image/phonebook.jpg';

export default function Home() {
    return (
        <>
            <TitleHome>Welcome to Your PhoneBook</TitleHome>
            <Logo><img src={phonebook} alt="Logo" height="300" /></Logo>
        </>
    )
}

