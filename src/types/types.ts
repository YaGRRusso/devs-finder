export type UserType = {
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
    name: string,
    location: string,
    blog: string,
    email: string | null,
    bio: string,
    public_repos: number,
    followers: number,
    following: number
    updated_at: string,
}

export type ReposType = {
    name: string,
    private: boolean,
    html_url: string,
    language: string,
    description: string | null
}