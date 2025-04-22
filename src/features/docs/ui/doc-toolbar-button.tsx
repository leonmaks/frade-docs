import { LucideIcon } from "lucide-react"

import { cn } from "@/shared/lib/shadcn-ui-utils"

type DocToolbarButtonProps = {
  onClick?: () => void
  isActive?: boolean
  icon: LucideIcon
}

export const DocToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: DocToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  )
}
