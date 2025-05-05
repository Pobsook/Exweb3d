import "./globals.css";
import AsideBar from "@/components/AsideBar+navBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Tagesschrift&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <AsideBar/>
        {children}
      </body>
    </html>
  );
}
