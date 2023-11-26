import NavBar from "@/components/navBar"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css" />
      </head>

      <body>
        <NavBar></NavBar>
        {children}</body>
    </html>
  )
}
