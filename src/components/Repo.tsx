import { RepositoryProps } from "../types/user";
import {IoCodeSlash, IoStarOutline} from 'react-icons/io5'
import {AiOutlineFork} from 'react-icons/ai'

//style

import classes from './Repo.module.css'



const Repo = (
    {
    name,
    forks_count,
    html_url,
    language,
    stargazers_count
    }:RepositoryProps) => {


    return (
        <div className={classes.main}>
            <h3>{name}</h3>
            <div className={classes.language}>
                <IoCodeSlash/>
                <p>{language}</p>
            </div>
                
            <div className={classes.start_and_forks}>
                <div>
                    <IoStarOutline />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>

            <a target="_blank" href={html_url} className={classes.button}>Ver código</a>
        </div>
    )
}


export default Repo