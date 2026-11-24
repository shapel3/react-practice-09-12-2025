import UserProfile from '../components/UserProfile/UserProfile';

const HomePage = () => {
    return (
        <div>
            <UserProfile user = { { name : "Shapel", age : "16", email : "anonim@gmail.com" }} />
        </div>
    );
}

export default HomePage;
