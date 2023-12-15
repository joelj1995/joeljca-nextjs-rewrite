import Header from "@/ui/header"

export default function LightNavLayhout ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header forceDarkMode={false} />

      <main>
        {children}
      </main>
    </>
  )
}