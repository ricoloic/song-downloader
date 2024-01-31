import fs from "fs";
import { execSync } from "child_process";

async function run() {
    const songList = await fs
        .readFileSync("../song-list.txt", "ascii")
        .split("\n");

    for (const song of songList) execSync(`spotdl --bitrate=48k ${song}`);
}

(() => run())();
