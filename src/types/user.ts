export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number
}

export type RepositoryProps = {
    name: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}