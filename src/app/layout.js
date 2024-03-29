import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Authprovider from "@/components/Authprovider/Authprovider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Authprovider>
        <div className="container">
        <Navbar/>       
        {children}
        <Footer/>
        </div>
        </Authprovider>
        </ThemeProvider>
        </body>
        
    </html>
  );
}
