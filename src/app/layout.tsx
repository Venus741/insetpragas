import Header from "@/components/header/header";
import "./globals.css";
import Main from "@/components/main/main";
import Footer from "@/components/footer/Footer";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Main/>
        <Footer/>
      </body>
    </html>
  );
}
