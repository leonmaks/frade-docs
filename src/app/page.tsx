import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/docs/123">
        <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
      </Link> to go to document ID
    </div>
  )
}
