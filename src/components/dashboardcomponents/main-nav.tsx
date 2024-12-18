import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <a
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </a>
      <a
        href="/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Customers
      </a>
      <a
        href="/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Products
      </a>
      <a
        href="/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </a>
    </nav>
  )
}
