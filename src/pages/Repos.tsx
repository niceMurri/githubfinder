import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom"
import { RepositoryProps } from "../types/user";
import Repo from "../components/Repo"; 

import classes from '../components/Repo.module.css'


const Repos = () => {
    
    let { id } = useParams<"id">(); 

    const [user, setUser] = useState<RepositoryProps[] | null>(null);

    
    useEffect(()=>{
        fetch(`https://api.github.com/users/${id}/repos`)
            .then((res) => res.json())
            .then(
                (json: RepositoryProps[]) => {


                json = json.sort((a,b) => a.stargazers_count - b.stargazers_count).splice(-5).reverse();
                setUser([...json]);
            }
            ).catch(err => console.log(err))
    },[]);


    return (
        <div className={classes.root}>
            {user?.length! > 4 && user?.map((item) => (
                <Repo {...item} />
            ))}
        </div>
        )
    

    
    
    /*
    
        (async() => {
        await repoInfos();
    })()
    */
    
    //stargazers_count
    
}


export default Repos