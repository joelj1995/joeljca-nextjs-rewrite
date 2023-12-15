import Header from "@/ui/header"

export default function DarkNavLayhout ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header forceDarkMode={true} />

      <main>
        {children}
      </main>
    </>
  )
}