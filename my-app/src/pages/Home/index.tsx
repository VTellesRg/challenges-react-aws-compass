import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {


    return (
        <>
        <div className="nav"> nav

        </div>
        <div className="header">
            <div> 
            <h1 className="home"> home </h1>
            </div>
            <div>
            <h1 className="user_name"> user_name</h1>
            </div>
        </div>
        <body className="body">
            <div className="write_field"> 
                <div className="post_input">
                    <image className="image"></image>
                    <input className="input" type="text" placeholder="O que você está pensando?"></input>
                    field 
                </div>
                <div className="icons">
                    <button className="button">Foto</button>
                    <button className="button">Anexo</button>
                    <button className="button">Localização</button>
                    <button className="button">Emoji</button>
                    <button className="button">Publicar</button>
                </div>
            </div>
            
            <div className="posts"> post
                <image className="image"></image>
                <text className="name"> name </text>
                <text className="date"> date </text>
            </div>

        </body>
        <div className="topics"> topics 
            <div className="friends"> Meus Amigos </div>
            <div className="amigo"> fulano
                <image className="image"></image>
                <text className="name"> name </text>
            </div>
            <div className="amigo"> fulano
                <image className="image"></image>
                <text className="name"> name </text>
            </div>
            <div className="amigo"> fulano
                <image className="image"></image>
                <text className="name"> name </text>
            </div>
        </div>
        </>
    );
}