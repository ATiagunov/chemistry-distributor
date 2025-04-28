import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="bg-orc-bg py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h1>
          {description && <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
