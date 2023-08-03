import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    V2_MetaFunction,
} from "@remix-run/react";
import styles from "~/tailwind.css";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "quikTriv - the easy quiz maker app" },
        {
            name: "description",
            content: "Make functional quizzes in a snap with quikTriv",
        },
    ];
};
export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    { rel: "stylesheet", href: styles },
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="flex flex-wrap w-full [&>*]:border [&>*]:border-red-400">
                <header className="navbar">
                    <h1>quikTriv</h1>
                    <nav></nav>
                </header>
                <div id="sidebar" className="min-w-[4rem]"></div>
                <main>
                    <Outlet />
                </main>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
