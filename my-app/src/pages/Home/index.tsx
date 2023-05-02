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
} from '@heroicons/react/24/solid'

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

    const getData = async (userLoc: string) => {
        let usersList = await GetUsers();
        let postsList = await GetPosts();
        let formatedUsers: any = [];
        let formatedPosts: any = [];

        usersList.forEach((user: UserType) => {
            let userNameTemp = user.name;
            let firstName = userNameTemp.split(" ").shift();
            let lastName = userNameTemp.split(" ").pop();
            if (userLoc !== user.name) {
                formatedUsers.push({ name: firstName + " " + lastName, profile_photo: user.profile_photo, user: user.user })
            }
        }
        );

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

            let newPost = {
                user: userPostTemp,
                post_date: post.post_date,
                description: post.description,
                likes: post.likes,
                comments: commentsTemp,
                url_imagem: post.url_imagem
            }

            formatedPosts.push(newPost);
        });

        setPosts(postsList);
        setUsers(formatedUsers);
        setLoading(false);
    }

    const handleFindUser = async (users: UserType[], userNick: string) => {
        return users.find((user: UserType) => {
            return user.user === userNick;
        })
    }


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
                                <input className="write_field_top_input" type="text" placeholder="No que você está pensando?" />
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
                            <div className="post">
                                <div className="post-header">
                                    <div className="post-header-top">
                                        <img className="post-header-top-image" src={userImage} />
                                        <div className="post-header-top-info">
                                            <h1 className="post-header-top-info-name">Patrícia Menezes</h1>
                                            <div className="post-header-top-info-subtitle">
                                                <p className="post-header-top-info-date">12 minutos atrás em</p>
                                                <img className="clockIcon" src="clock.png" />
                                                <p className="post-header-top-info-text">Paisagens Exuberantes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="post-header-top-description">Minha última viagem para a Ilha do Comendador, um lugar simplesmente incrível, natureza praticamente intocada. Recomendo a todos que apreciam o mundo como ele é.</p>
                                </div>
                                <div className="post-main">
                                    <img className="post-main-image" src={userImage} />
                                </div>
                            </div>
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