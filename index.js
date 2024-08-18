import { WebSocketTransport } from "@thing-king/metaform";

export default function (url = "ws://127.0.0.1:8080") {
    return new WebSocketTransport.Client(url);
}
