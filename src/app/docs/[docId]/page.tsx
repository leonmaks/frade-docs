import { DocEditor } from "@/features/docs/ui/doc-editor"
import { DocToolbar } from "@/features/docs/ui/doc-toolbar"

export default async function DocIdPage({
  params,
}: {
  params: Promise<{ docId: string }>
}) {
  const { docId } = await params

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <DocToolbar />
      <DocEditor />
    </div>
  )

}
