# @thing-king/browser-client

Client used to interact with the `@thing-king` browser service via `@thing-king/metaform` `WebSocketTransport`

## Installation

```bash
npm install @thing-king/browser-client
```

## Examples

```js
import bClient from "@thing-king/browser-client";

(async () => {
    const client = bClient(); // optional: url, default: "ws://localhost:8080"
    await client.start();

    const page = await client.newPage();
    await page.goto("https://example.com");
})();
```
