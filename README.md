# @thing-king/browser-client

Client used to interact with the `@thing-king` browser service via `@thing-king/metaform` `WebSocketTransport`

## Installation

```bash
npm install @thing-king/browser-client
```

## Usage Example

```js
import bClient from "@thing-king/browser-client";

(async () => {
    const client = bClient(
        // leave blank for local development
        "https://browsers.thingking.org?access_token=xiIeU8FSqs-BmFQ33J0tA-Xx8vvx0YJ4-4ReVVMEEfS-M015GQZU"
    );
    await client.start();

    const page = await client.newPage();
    await page.goto("https://example.com");
})();
```
