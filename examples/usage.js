import bClient from "@thing-king/browser-client";

(async () => {
    const client = bClient();
    await client.start();

    const page = await client.newPage();
    await page.goto("https://example.com");
})();
