import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './router/api';
// dot env to set localhost 3000
dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use('/api',apiRoutes);
//response for invalid routers
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

//listener for server
server.listen(process.env.PORT);