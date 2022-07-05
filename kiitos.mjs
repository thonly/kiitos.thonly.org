import fs from 'fs';
import https from 'https';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// expires on 2022-10-02
const cert = fs.readFileSync('private/fullchain.pem');
const key = fs.readFileSync('private/privkey.pem');

const bot = express();
bot.use(express.static('public'));
bot.use(cors());
bot.use(express.json());
bot.use(express.urlencoded({ extended: true })); 

bot.get('/', (req, res) => {
    res.sendFile('/index.html', { root: dirname(fileURLToPath(import.meta.url)) });
});

https.createServer({cert, key}, bot).listen(443);