import { WebSocketTransport } from "@thing-king/metaform";

export default function (access_token, local = false) {
    if (!access_token) throw new Error("access_token is required");
    return new WebSocketTransport.Client(
        local
            ? `ws://127.0.0.1:8080?access_token=${access_token}`
            : `https://browsers.thingking.org?access_token=${access_token}`
    );
}
