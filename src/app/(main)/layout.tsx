import Header from "@/ui/header"

export default function LightNavLayhout ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header forceDarkMode={false} />

      {children}
    </section>
  )
}