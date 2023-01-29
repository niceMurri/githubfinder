import { UserProps } from "../types/user";
import {MdLocationPin} from "react-icons/md";
import { Link } from "react-router-dom";

import classes from "./User.module.css";

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following,
}:UserProps) => {
    return(
        <div className={classes.user}>
            <img src={avatar_url} alt="avatar github" />
            <h2>{login}</h2>

            {/* if location exist */}
            {location && 
            <p className={classes.location}>
                <MdLocationPin/>
                <span>{location}</span>
            </p>}

            <div className={classes.stats}>
                <div className={classes.number}>
                    <p>Seguidores</p>
                    <p>{followers}</p>
                </div>
                <div className={classes.number}>
                    <p>Seguindo</p>
                    <p>{following}</p>
                </div>
            </div>

            <Link to={`/repos/${login}`} />
        </div>
    )
}


export default User;