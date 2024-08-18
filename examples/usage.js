import bClient from "../index.js";

(async () => {
    const client = bClient("https://browser-service-d6tgrrk7cq-uc.a.run.app/");
    // const client = bClient();
    await client.start();

    const result = await client.send("get", { url: "https://example.com" });
    console.log("result", result);
    // const page = await client.get("https://example.com");
})();
