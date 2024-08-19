import bClient from "../index.js";

(async () => {
    const client = bClient();
    await client.start();

    console.log("Client", client);
    const { connect, get } = client.things;
    console.log("Connect", connect);
    console.log("Get", get);

    // const result = await client.send("get", { url: "https://example.com" });
    // console.log("result", result);
    // const page = await client.get("https://example.com");
})();
