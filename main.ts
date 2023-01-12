import Config from "./types/config.ts";
import PlayerAPIResponse from "./types/player.ts";
import { Client } from "https://deno.land/x/discord_rpc@0.3.1/mod.ts";

const config: Config = JSON.parse(Deno.readTextFileSync("config.json"));
const client = new Client({ id: "728000789536047184" });
await client.connect();
const apiUrl = `https://player.monstercat.app/api/currently-playing?${
  config.playerUrl.split("?")[1]
}`;
const start = Date.now();

setInterval(async () => {
  const data: PlayerAPIResponse = await (await fetch(apiUrl)).json();
  await client.setActivity({
    assets: {
      large_image:
        `https://cdx.monstercat.com/?width=1024&encoding=jpg&url=https://www.monstercat.com/release/${data.CurrentlyPlaying.CatalogId}/cover`,
    },
    details: `Listening to ${data.CurrentlyPlaying.TrackTitle}`,
    state:
      `by ${data.CurrentlyPlaying.ArtistsTitle}\non ${data.CurrentlyPlaying.ReleaseTitle}`,
    timestamps: {
      start,
    },
  });
}, 5000);
