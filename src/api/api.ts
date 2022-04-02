const BASEURL = 'https://api.github.com/users/'

export default {
    getUser: async (user: string) => {
        const res = await fetch(BASEURL + user);
        const json = await res.json();
        return json
    },
    getRepos: async (user: string) => {
        const res = await fetch(BASEURL + user + '/repos?sort=updated&per_page=24');
        const json = await res.json();
        return json
    }
} 