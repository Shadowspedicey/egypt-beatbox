import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<html lang="en">
		<head>
			<link href="https://fonts.googleapis.com" rel="preconnect"/>
			<link href="https://fonts.gstatic.com" rel="preconnect"/>
			<link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
		</head>
		<body className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-white">{children}</body>
	</html>
  )
}