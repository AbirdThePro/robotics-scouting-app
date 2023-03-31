import { getAttribute, setters } from "./dataStore";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1091102837511041176/BaIT7C5IVyuenB1ZK1x2vBldEtfoXynRmVZOncTSS7sNWOKpx3Hyh7QT3nL69ASdS5gU";

const sendMessage = (password) => {
    // gets data keys
    const keys = Object.keys(setters);

    // parsed data
    let data = [ ];

    // gets data from local storage
    for (let i=0; i<keys.length; i++) {
        data.push({
            "name": keys[i],
            "value": getAttribute(keys[i])
        });
    }

    let request = {
        username: "Snail Scout",
        avatarUrl: "https://a-z-animals.com/animals/snail/",
        embeds: {
            "title": `Scouting Report for Match ${getAttribute("matchnum")}`,
            "fields": data
        }
    };
    let aaa = JSON.stringify(request)

    // sends data
    fetch(
        WEBHOOK_URL,
        {
            method: "POST",
            body: {aaa},
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};

export default sendMessage;
