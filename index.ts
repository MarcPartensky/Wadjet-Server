import express from 'express';
import serveIndex from 'serve-index';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { Server, LobbyRoom, RelayRoom } from 'colyseus';
import { monitor } from '@colyseus/monitor';

import {GameRoom} from "./src/game-room"

const port = Number(process.env.PORT || 2567) + Number(process.env.NODE_APP_INSTANCE || 0);
const app = express();

app.use(cors());
app.use(express.json());

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
  server: createServer(app),
  express: app,
  pingInterval: 0,
});

gameServer.define("game", GameRoom)


app.use('/', serveIndex(path.join(__dirname, "static"), {'icons': true}))
app.use('/', express.static(path.join(__dirname, "static")));

// (optional) attach web monitoring panel
app.use('/colyseus', monitor());

gameServer.onShutdown(function(){
  console.log(`game server is going down.`);
});

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);
