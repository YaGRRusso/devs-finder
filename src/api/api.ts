import { UserType, ReposType } from "../types/types";

const BASEURL = 'https://api.github.com/users/'

export default {
    getUser: async (user: string): Promise<UserType> => {
        const res = await fetch(BASEURL + user);
        const json = res.json();
        return json;
    },
    getRepos: async (user: string): Promise<ReposType[]> => {
        const res = await fetch(BASEURL + user + '/repos');
        const json = res.json();
        return json;
    }
} 