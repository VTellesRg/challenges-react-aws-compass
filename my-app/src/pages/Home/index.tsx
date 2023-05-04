/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from "react";
import { UserType, PostType } from "../../types/type";
import { useNavigate, useLocation } from "react-router-dom";
import {
    ChevronUpIcon,
    ChevronDownIcon,
    HomeIcon,
    CameraIcon,
    PhotoIcon,
    PaperClipIcon,
    MapPinIcon,
    FaceSmileIcon,
    HandThumbUpIcon,
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
} from '@heroicons/react/24/outline'

import "./styles.css";
import { GetPosts, GetUsers } from "../../helpers/Data";

export default function Home() {

    const [name, setName] = React.useState<string>("");
    const [userImage, setUserImage] = React.useState<string>("");
    const [arrow, setArrow] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();

    const [posts, setPosts] = React.useState<any[] | null>(null);
    const [users, setUsers] = React.useState<UserType[] | null>(null);


    //fix needed: function to calculate the time since the post was published: return error is not assignable to type 'ReactNode'. 
    // const AgeMessage = (post: PostType) => {
    //     const postDate = new Date(post.post_date);
    //     const Today = new Date();
    //     const diff = Today.getTime() - postDate.getTime();

    //     const sec = Math.floor(diff / 1000);
    //     const min = Math.floor(sec / 60);
    //     const hours = Math.floor(min / 60);
    //     const days = Math.floor(hours / 24);
    //     const weeks = Math.floor(days / 7);
    //     const months = Math.floor(days / 30);
    //     const years = Math.floor(days / 365);

    //     if (sec < 60) {
    //         return "Publicado há alguns segundos";
    //     } else if (min < 60) {
    //         return `Publicado há ${min} minutos`;
    //     } else if (hours < 24) {
    //         return `Publicado há ${hours} horas`;
    //     } else if (days < 7) {
    //         return `Publicado há ${days} dias`;
    //     } else if (weeks < 4) {
    //         return `Publicado há ${weeks} semanas`;
    //     } else if (months < 12) {
    //         return `Publicado há ${months} meses`;
    //     } else {
    //         return `Publicado há ${years} anos`;
    //     }
    // }
    
    // get data from api
    const getData = async (userLoc: string) => {
        let usersList = await GetUsers();
        let postsList = await GetPosts();
        let formatedUsers: any = [];
        let formatedPosts: any = [];

        // adjust a new array with the users data that will be rendered
        usersList.forEach((user: UserType) => {
            let userNameTemp = user.name;
            let firstName = userNameTemp.split(" ").shift();
            let lastName = userNameTemp.split(" ").pop();
            if (userLoc !== user.name) {
                formatedUsers.push({ name: firstName + " " + lastName, profile_photo: user.profile_photo, user: user.user })
            }
        }
        );
        //adjust a new array with the posts data that will be rendered
        postsList.forEach(async (post: PostType) => {
            let commentsTemp: any = [];
            if (post.comments !== undefined) {
                post.comments.forEach(async (comment: any) => {
                    let user = await handleFindUser(usersList, comment.user);
                    if (user !== undefined) {
                        commentsTemp.push({ user: user.name, profile_photo: user.profile_photo, comment: comment.comment });
                    }
                });
            }

            let userPostTemp = await handleFindUser(usersList, post.user);
            //newPost construct an object with the same structure as the api but with posts and users data together
            let newPost = {
                user: userPostTemp,
                post_date: post.post_date,
                description: post.description,
                likes: post.likes,
                comments: commentsTemp,
                url_imagem: post.url_imagem //fix needed: some users did not receive an url image from the api
            }

            formatedPosts.push(newPost);
        });


        setPosts(formatedPosts);
        // console.log(formatedPosts);

        setUsers(formatedUsers);
        setLoading(false);
    }

    const handleFindUser = async (users: UserType[], userNick: string) => {
        return users.find((user: UserType) => {
            return user.user === userNick;
        })
    }



    // effect to get the user data from the login page and acess the home page
    useEffect(() => {
        const userLocation = location.state.user as UserType;
        getData(userLocation.name as string);

        if (userLocation !== null) {
            setName(userLocation?.name as string);
            setUserImage(userLocation?.profile_photo as string);
        } else {
            //redirect to login
            navigate('/', { replace: true }); //replace the current entry in the history stack instead of adding a new one
        }
    }, []);
    // html return complete home page
    return (
        <div className="container">
            <div className="nav">
                <img className="nav-logo" src="/assets/images/logo.png" />
            </div>
            <div className="main">
                <div className="header">
                    <div className="header-left">
                        <HomeIcon className="header-left-icon" />
                        <h1 className="header-left-h1"> Home </h1>
                    </div>
                    <div className="header-right">
                        <h1 className="header-right-h1"> {name}</h1>
                        <img className="header-right-image" src={userImage} />
                    </div>
                </div>
                <div className="body">
                    <div className="posts">
                        <div className="write_field">
                            <div className="write_field_top">
                                <img className="write_field_top_image" src={userImage} />
                                <input className="write_field_top_input" type="text"
                                    placeholder="No que você está pensando?" />
                            </div>
                            <div className="write_field_bottom">
                                <div className="write_field_bottom_icons">
                                    <CameraIcon className="write_field_bottom_icon" />
                                    <PhotoIcon className="write_field_bottom_icon" />
                                    <PaperClipIcon className="write_field_bottom_icon" />
                                    <MapPinIcon className="write_field_bottom_icon" />
                                    <FaceSmileIcon className="write_field_bottom_icon" />
                                </div>
                                <button className="write_field_bottom_button">Postar</button>
                            </div>
                        </div>
                        {!loading &&
                            posts && posts.map((post: any, index: number, user: any) => {
                                return (
                                    <div className="post" key={index}>
                                        <div className="post-header">
                                            <div className="post-header-top">
                                                <img className="post-header-top-image" src={post.user.profile_photo} />
                                                <div className="post-header-top-info">
                                                    <h1 className="post-header-top-info-name">{post.user.name}</h1>
                                                    <div className="post-header-top-info-subtitle">
                                                        <p className="post-header-top-info-date">12 minutos atrás{/* add AgeMessage function here */}</p>
                                                        <img className="clockIcon" src="/assets/images/clock.png" />
                                                        <p className="post-header-top-info-text">Paisagens Exuberantes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="post-header-top-description">{post.description}</p>
                                        </div>
                                        <div className="post-main">
                                            <img className="post-main-image" src={post.url_imagem} />
                                        </div>
                                        <div className="post-bottom-fields">
                                            <div className="post-bottom-fields-likes">
                                                <HandThumbUpIcon className="like-icon" />
                                                <p className="post-bottom-fields-likes-p ">Curtiu</p>
                                                <div className="post-bottom-fields-likes-acount">
                                                    <p className="post-bottom-fields-likes-acount-p">{post.likes}</p>
                                                </div>
                                            </div>
                                            <div className="post-bottom-fields-comments">
                                                <ChatBubbleLeftEllipsisIcon className="comment-icon" />
                                                <p className="post-bottom-fields-comments-p">Comentários</p>
                                                <div className="post-bottom-fields-comments-acount">
                                                    <p className="post-bottom-fields-comments-acount-p">{post.comments.length}</p>
                                                </div>
                                            </div>
                                            <div className="post-bottom-fields-shared">
                                                <ShareIcon className="post-bottom-fields-shared-icon" />
                                                <p className="post-bottom-fields-shared-p">Compartilhar</p>
                                            </div>
                                        </div>
                                        <div className="comments-area">
                                            <div className="comments-area-mind">
                                                <img className="comments-area-mind-user-picture" src={userImage} />
                                                <input className="comments-area-mind-input" type="text" placeholder="O que voce está pensando? " />
                                                <div className="comments-area-mind-icons">
                                                    <CameraIcon className="comments-area-mind-icon" />
                                                    <PhotoIcon className="comments-area-mind-icon" />
                                                    <PaperClipIcon className="comments-area-mind-icon" />
                                                    <MapPinIcon className="comments-area-mind-icon" />
                                                    <FaceSmileIcon className="comments-area-mind-icon" />
                                                </div>
                                            </div>
                                            <h1 className="comments-area-h1">Todos os comentários</h1>


                                            {post.comments && post.comments.map((comment: any, key: number) => {
                                                return (
                                                    <div className="comment-area" key={key}>
                                                        <img className="comment-area-user-picture" src={comment.profile_photo} />
                                                        <div className="comment-area-user-description">
                                                            <p className="comment-area-user-description-p">
                                                                <strong className="comment-area-user-description-strong">{comment.user}: </strong> {comment.comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div className="comment-area-divider" />
                                            <div className="all-comments"> {/* set this function later onClick={() => setAllComments(true)} */}
                                                <h1 className="all-comments-h1">Ver todos os comentários</h1>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                        {loading &&
                            <div className="loading">
                                <img className="loading-image" src="/assets/images/loading.png" />
                            </div>
                        }
                    </div>

                    <div className="topics">
                        <div className={arrow ? "trend" : "trend-colapsed"}>
                            <div className="trend-header">
                                <h1 className="trend-header-title">Meus Amigos</h1>
                                {arrow ?
                                    <ChevronDownIcon className="trend-arrow" onClick={() => setArrow(false)} /> :
                                    <ChevronUpIcon className="trend-arrow" onClick={() => setArrow(true)} />}
                            </div>
                            {arrow &&
                                <div className="friends-list">
                                    {users && users.map((user: UserType, key) => {
                                        return (
                                            <div className="friend" key={key}>
                                                <img className="friend-image" src={user.profile_photo} />
                                                <h1 className="friend-name">{user.name}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                        <div className="trend" />
                        <div className="trend" />

                    </div>

                </div>

            </div>

        </div>
    )
}