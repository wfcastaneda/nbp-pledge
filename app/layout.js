import './globals.css'
import Providers from "./providers";

export const metadata = {
  title: 'Never bitcoin pledge',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
