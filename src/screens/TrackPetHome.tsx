import { Link, useNavigate } from 'react-router-dom'

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  PawPrint,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserContext } from '@/Context/userContext'
import { useContext } from 'react'

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export function TrackPetHome() {

  const navigate = useNavigate()

  const { user } = useContext(UserContext)

  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider delayDuration={800} skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/home"
                  className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                  <Home className="w-5 h-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/myPets"
                  className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                >
                  <PawPrint className="w-5 h-5" />
                  <span className="sr-only">Pets</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pets</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-4">
          <TooltipProvider delayDuration={800} skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="w-5 h-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="w-5 h-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base"
                >
                  <Package2 className="w-5 h-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="w-5 h-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Orders
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="w-5 h-5" />
                  Products
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="w-5 h-5" />
                  Customers
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="w-5 h-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="#">Tracks</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Track</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative flex-1 ml-auto md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/antoniojpsalves.png" alt="@antoniojpsalves" />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/')}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Track your pets</CardTitle>
                  <CardDescription className="max-w-lg leading-relaxed text-balance">
                    Introducing Our Dynamic PetTrack Dashboard.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Track a pet</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Meow</CardDescription>
                  <CardTitle className="text-4xl">In Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Strap: 123e4567-e89b
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Charlie</CardDescription>
                  <CardTitle className="text-4xl">In Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Strap: 231e4981-e12b
                  </div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2 ml-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-sm h-7"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 text-sm h-7"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Walk with your pets</CardTitle>
                    <CardDescription>
                      Recent tours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Location</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Pet
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">R. Cubatão</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              São Paulo - SP, 04013-002
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Meow
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              safe
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            23/09/2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Av. Paulista</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              São Paulo - SP, 01311-100
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Charlie
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              safe
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            24/09/2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">R. Cubatão</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              São Paulo - SP, 04013-002
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Meow
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              safe
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            27/09/2024
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="flex items-center gap-2 text-lg group">
                    Track path Oe31b70H
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <Copy className="w-3 h-3" />
                      <span className="sr-only">Copy Track ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: September 27, 2024</CardDescription>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <PawPrint className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Current Track - Meow
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="w-8 h-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Pet Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Name <span>Meow</span>
                      </span>
                      <span>Age: 1 year and 2 months</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Location info</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>R. Cubatão</span>
                      <span>726 - Vila Mariana</span>
                      <span>São Paulo - SP, 04013-002</span>
                    </address>
                  </div>
                  <div className="grid gap-3 auto-rows-max">
                    <div className="font-semibold">Time info</div>
                    <div className="text-muted-foreground">
                      Night 21:30
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Owner Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Owner</dt>
                      <dd>Antonio Alves</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">{user.email}</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">CEP</dt>
                      <dd>
                        <a href="tel:">{user.cep}</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Pet state</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dd>SAFE</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center px-6 py-3 border-t bg-muted/50">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">September 27, 2024</time>
                </div>
                <Pagination className="w-auto ml-auto mr-0">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="w-6 h-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Track</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="w-6 h-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Track</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
