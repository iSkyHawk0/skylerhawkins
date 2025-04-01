// app/layout.js
import '/styles/globals.css';

export const metadata = {
  title: 'Skyler Hawkins Portfolio',
  description: 'Portfolio website for Skyler Hawkins',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
