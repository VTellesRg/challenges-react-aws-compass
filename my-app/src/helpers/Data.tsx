export const GetPosts = async () => {
    let url = 'http://localhost:3001/api/v1/posts';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        return response;
    }
    catch (e) {
        console.log("error", e);
    }
}
// get posts and users functions
export const GetUsers = async () => {
    let url = 'http://localhost:3001/api/v1/users';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        return response;
 
    }
    catch (e) {
        console.log("error", e);
    }
}

export const GetComments = async () => {
    let url = 'http://localhost:3001/api/v1/comments';
    try {
        let response = await fetch(url).then(res => res.json()).catch(err => console.log(err));
        return response;
    }
    catch (e) {
        console.log("error", e);
    }
}