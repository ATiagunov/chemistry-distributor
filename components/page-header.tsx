import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="bg-orc-bg py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
          {description && <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
