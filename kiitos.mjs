import fs from 'fs';
import https from 'https';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { resetRouter, restartBroadband, rescanForDevices } from "./server/cabin.mjs";

// expires on 2023-1-07
const cert = fs.readFileSync('private/fullchain.pem');
const key = fs.readFileSync('private/privkey.pem');

const bot = express();
bot.use('/public', express.static('public'));
bot.use(cors());
bot.use(express.json());
bot.use(express.urlencoded({ extended: true })); 

bot.get('/', (req, res) => {
    res.sendFile('/index.html', { root: dirname(fileURLToPath(import.meta.url)) });
});

bot.post('/cabin', async (req, res) => {
    let status;

    switch (req.body.action) {
        case "reset":
            status = await resetRouter();
            break;
        case "restart":
            status = await restartBroadband();
            break;
        case "rescan":
            status = await rescanForDevices();
            break;
    }

    res.json({ status });
});

https.createServer({cert, key}, bot).listen(443);