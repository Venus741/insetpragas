import Header from "@/components/header/header";
import "./globals.css";
import Main from "@/components/main/main";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Main/>
      </body>
    </html>
  );
}
