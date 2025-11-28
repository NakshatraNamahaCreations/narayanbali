// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css"; // create if you need custom global styles
import SetVhClient from "./components/SetVhClient";
export const metadata = {
  title: "NarayanBali",
  description: "NarayanBali site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SetVhClient/>
        {children}</body>
    </html>
  );
}
