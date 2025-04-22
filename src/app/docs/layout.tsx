export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <p>Docs Navbar</p> */}
      <div className="bg-amber-200">
        {children}
      </div>
    </>
  )
}
