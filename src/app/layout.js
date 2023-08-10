import "./globals.css";
import { Inter, Playfair } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "Yusong Shi - Frontend Developer",
  description:
    "A web developer and digital product designer with a focus on user centered experience develop. Rooted in NYC, serving clients across the country. Actively pursuing a new career direction. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
        });`,
        }}
      />
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
