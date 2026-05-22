import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "../globals.css";
import NavBar from "../../components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";



const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "AdoptNest",
  description: "AdoptNest is a platform for pet adoption. It is a website where people can adopt pets from all over the world. It is also a website where people can find pets to adopt.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
