export const GetPosts = async () => {
    let url = 'https://my-api-nodejs.vercel.app/api/v1/user/post';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        if (Object.keys(response).length === 1) {
            let postsArray = response.posts;
            return postsArray;
        }
    }
    catch (e) {
        console.log("error", e);
    }
}

export const GetUsers = async () => {
    let url = 'https://my-api-nodejs.vercel.app/api/v1/user';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        if (Object.keys(response).length === 1) {
            let usersArray = response.users;
            return usersArray;
        }
    }
    catch (e) {
        console.log("error", e);
    }
}