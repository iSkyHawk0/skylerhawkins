// src/pages/_app.js
"use client";
import '/styles/globals.css';
export const metadata = {
  title: "Your App Title",
  description: "A description of your app",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
