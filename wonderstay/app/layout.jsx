import {Inter} from "next/font/google";
import "../assets/styles/globals.css";
import Footer from '../components/footer';
import Header from "../components/header";
const inter = Inter({
 subsets:['latin']
});


export const metadata = {
  title: "WonderStay",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      ><Header/>
       <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
