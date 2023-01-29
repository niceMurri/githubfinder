import { UserProps } from "../types/user";
import React, {useState} from "react";



import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {
        setUser(null)
        setError(false);

        const res = await fetch(`https://api.github.com/users/${userName}`);

        //if res return 404 then error
        if(res.status === 404){
            setError(true);
            return;
        }

        const data = await res.json();  
        

        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }

      setUser(userData);
    }

    return (
        <>
            <Search loadUser={loadUser}/>

            <h1>{user && <User {...user}/>}</h1>
            <h1>{error && <Error />}</h1>
        </>
        
    )
}

export default Home