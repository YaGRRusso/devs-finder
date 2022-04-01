export type UserType = {
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
    name: string,
    location: string,
    blog: string,
    email: string,
    bio: string,
    public_repos: number,
    followers: string,
    following: string
    updated_at: Date,
}

export type ReposType = {
    name: string,
    private: boolean,
    html_url: string,
    language: string
}