import { Link, useNavigate } from "react-router-dom"
import {
  ChevronLeft,
  Ellipsis,
  Home,
  LineChart,
  Mail,
  Package,
  Package2,
  PanelLeft,
  PawPrint,
  PhoneIcon,
  Search,
  Settings,
  ShoppingCart,
  TriangleAlert,
  Upload,
  UserIcon,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { QrCodeImg } from "@/components/QrCodeImg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useContext, useEffect, useState } from "react"


import { useSearchParams } from 'react-router-dom'
import { UserContext } from "@/Context/userContext"
import { Separator } from "@/components/ui/separator"
import { toast, ToastContainer } from "react-toastify"
// import { UserContext } from "@/Context/userContext"

export const description = "test pet info page"


interface petsDataProps {
  id: string
  name: string
  resume: string
  status: string
  color: string
  breed: string
  gender: string
  size: string
  weight: number
  srcImg: string
  ownerId: string
  ownerName: string
  ownerCel: string
  birthDate: string
}

export function PetInfo() {

  const navigate = useNavigate()

  const { user } = useContext(UserContext)

  // console.log(user.id)

  const [searchParams] = useSearchParams()

  const [currentStatus, setCurrentStatus] = useState('safe')

  const [inputBlocked, setInputBlocked] = useState(false)

  const [email, setEmail] = useState('')

  const [data, setData] = useState<petsDataProps[]>([
    {
      id: "0dcb32e5-f241-476e-8c14-3c62779f806c",
      name: "Meow",
      resume: "Meow is a little beautiful cat.",
      status: "safe",
      color: "grey",
      breed: "Abyssinian",
      gender: "male",
      size: "s",
      srcImg: 'https://images.unsplash.com/photo-1625665464963-74d0d30c648f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ownerId: 'syn',
      ownerCel: '0909090900',
      ownerName: 'Alison',
      birthDate: '2023-05-30',
      weight: 2.6

    },
    {
      id: "4b90f45d-6ff5-42b9-a129-64e5ceac8c27",
      name: "Charlie",
      resume: "Charlie is a good boy, and love play in raining days.",
      status: "safe",
      color: "white and grey",
      breed: "Husky",
      gender: "male",
      size: "m",
      srcImg: 'https://images.unsplash.com/photo-1682073177089-9526a4758455?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ownerId: 'syn',
      ownerCel: '0909090900',
      ownerName: 'Alison',
      birthDate: '2020-02-19',
      weight: 5.1
    }
  ])

  const [currentPet, setCurrentPet] = useState<petsDataProps>({} as petsDataProps)

  useEffect(() => {
    const petId = searchParams.get('petId'); // Obtém o valor de 'petId' do query param

    if (petId) {
      // Função que percorre o array 'data' e encontra o objeto com o id correspondente
      const selectedPet = data.find(pet => pet.id === petId);

      if (selectedPet) {
        setCurrentPet(selectedPet); // Atualiza o estado com o objeto correspondente
      }

      // console.log(currentPet)
    }
  }, [searchParams, currentPet, data]);


  function defineLostPetLost() {

    const newState = data.map(pet => {
      if (pet.id === currentPet.id) {
        pet.status = currentStatus
      }
      return pet
    })

    if (currentStatus === 'lost') {
      setInputBlocked(true)
    }

    if (currentStatus === 'safe') {
      setInputBlocked(false)
    }

    setData(newState)
  }

  function calcularIdade(birthDate: string): string {
    const dataNascimento = new Date(birthDate);
    const agora = new Date();

    const diferencaEmMilissegundos = agora.getTime() - dataNascimento.getTime();
    const diferencaEmAnos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25)); // 365.25 para considerar anos bissextos

    return diferencaEmAnos === 1 ? `${diferencaEmAnos} ano` : `${diferencaEmAnos} anos`;
  }

  async function handleContactSubmit() {
    console.log('tentando enviar o email a partir do remetente: ', email)

    toast('Entrando em contato com o dono...', {
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {

        //atualizar usuario logado
        setEmail('')
      }
    })

  }

  return (

    <div className="flex flex-col w-full min-h-screen bg-muted/40" >

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />



      {user.id ? (
        <>
          <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <TooltipProvider delayDuration={800} skipDelayDuration={500}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="/home"
                      className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-accent-foreground hover:text-foreground hover:bg-accent md:h-8 md:w-8"
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
                      className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                      <PawPrint className="w-5 h-5" />
                      <span className="sr-only">Pets</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Pets</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
            <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
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
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Orders
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
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
                      <Link to="/home">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/myPets">Pets</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Pet info</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative flex-1 ml-auto md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
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
                      <AvatarImage src="https://github.com/Soepaza.png" alt="@antoniojpsalves" />
                      <AvatarFallback>Antonio Alves</AvatarFallback>
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
            <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="w-4 h-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                  <h1 className="flex-1 text-xl font-semibold tracking-tight shrink-0 whitespace-nowrap sm:grow-0">
                    {currentPet.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className={
                      `flex justify-center ml-auto sm:ml-0 item-center ${currentPet.status === 'lost' ? 'bg-red-600 text-white' : ''
                      }`
                    }
                  >
                    {currentPet.status}
                    {currentPet.status === 'lost' && <TriangleAlert className="w-4 h-4 ml-2 font-bold text-white animate-pulse" />}
                  </Badge>
                  <div className="items-center hidden gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm">
                      Discard
                    </Button>
                    <Button size="sm" onClick={defineLostPetLost}>Save Changes</Button>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                  <div className="grid items-start gap-4 auto-rows-max lg:col-span-2 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-0">
                      <CardHeader>
                        <CardTitle>Pet Details</CardTitle>
                        <CardDescription>
                          Everthing is fine with {currentPet.name}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              type="text"
                              className="w-full"
                              defaultValue={currentPet.name}
                              disabled={inputBlocked}
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                              id="description"
                              defaultValue={currentPet.resume}
                              className="min-h-32"
                              disabled={inputBlocked}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-1">
                      <CardHeader>
                        <CardTitle>Info</CardTitle>
                        <CardDescription>
                          Here is the data of your buddy
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[100px]">Breed</TableHead>
                              <TableHead>Gender</TableHead>
                              <TableHead>Age</TableHead>
                              <TableHead className="w-[100px]">Size</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-semibold">
                                {currentPet.breed}
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="stock-1" className="sr-only">
                                  Male
                                </Label>
                                <Input
                                  id="stock-1"
                                  type="text"
                                  defaultValue={currentPet.gender}
                                  disabled={inputBlocked}
                                />
                              </TableCell>
                              <TableCell>
                                <Label htmlFor="price-1" className="sr-only">
                                  Months
                                </Label>
                                <Input
                                  id="price-1"
                                  type="number"
                                  defaultValue="14"
                                  disabled={inputBlocked}
                                />
                              </TableCell>
                              <TableCell>
                                <ToggleGroup
                                  type="single"
                                  defaultValue={currentPet.size ?? 's'}
                                  variant="outline"
                                  disabled={inputBlocked}
                                >
                                  <ToggleGroupItem value="s">S</ToggleGroupItem>
                                  <ToggleGroupItem value="m">M</ToggleGroupItem>
                                  <ToggleGroupItem value="l">L</ToggleGroupItem>
                                </ToggleGroup>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`grid items-start gap-4 auto-rows-max lg:gap-8
                  ${inputBlocked ? 'cursor-not-allowed' : ''}
                `}>
                    <Card x-chunk="dashboard-07-chunk-3">
                      <CardHeader>
                        <CardTitle>Pet Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="status">Status</Label>
                            <Select defaultValue={currentPet.status} onValueChange={e => setCurrentStatus(e)}>
                              <SelectTrigger id="status" aria-label="Select status">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="safe">Safe</SelectItem>
                                <SelectItem value="lost">Lost</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                    >
                      <CardHeader>
                        <CardTitle>QR Code of your pet</CardTitle>
                        <CardDescription>
                          This was made by the current Strap
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <QrCodeImg source={`http://localhost:5173/petInfo?petId=${currentPet.id}`} />
                          <div className="grid grid-cols-3 gap-2">
                            <button>
                              <span className="object-cover w-full h-20 rounded-md aspect-square"> img here </span>
                            </button>
                            <button>
                              <span className="object-cover w-full h-20 rounded-md aspect-square"> img here </span>
                            </button>
                            <button className="flex items-center justify-center w-full border border-dashed rounded-md aspect-square">
                              <Upload className="w-4 h-4 text-muted-foreground" />
                              <span className="sr-only">Upload new pic of your pet</span>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Save Changes</Button>
                </div>
              </div>
            </main>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 bg-[url('assets/img/bg.png')] bg-cover bg-center">
          <div className="flex items-center justify-center gap-4 p-4">
            <Card className="w-full max-w-lg shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-28 h-28">
                    <AvatarImage src={currentPet.srcImg} alt={`Foto de ${currentPet.name}`} />
                    <AvatarFallback>Pet</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{currentPet.name}</CardTitle>
                    <CardDescription>{currentPet.resume}</CardDescription>
                    <div className="w-20">
                      <Badge
                        variant="outline"
                        className={
                          `flex justify-center ml-auto sm:ml-0 item-center ${currentPet.status === 'lost' ? 'bg-red-600 text-white' : ''
                          }`
                        }
                      >
                        {currentPet.status}
                        {currentPet.status === 'lost' && <TriangleAlert className="w-4 h-4 ml-2 font-bold text-white animate-pulse" />}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span>Idade:</span>
                      <span className="font-semibold">{calcularIdade(currentPet.birthDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peso:</span>
                      <span className="font-semibold">{currentPet.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cor:</span>
                      <span className="font-semibold">{currentPet.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raça:</span>
                      <span className="font-semibold">{currentPet.breed}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span>Gênero:</span>
                      <span className="font-semibold">{currentPet.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tamanho:</span>
                      <span className="font-semibold">{currentPet.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-semibold">{currentPet.status}</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">{currentPet.ownerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">{currentPet.ownerCel}</span>
                </div>
              </CardContent>
            </Card>
            <Card
              className="overflow-hidden shadow-lg min-w-fit" x-chunk="dashboard-07-chunk-4"
            >
              <CardHeader>
                <CardTitle>QR Code this pet</CardTitle>
                <CardDescription>
                  This is the indentification of the pet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <QrCodeImg source={`http://localhost:5173/petInfo?petId=${currentPet.id}`} />
                  <div className="grid grid-cols-3 gap-2">
                    <button>
                      <span className="object-cover w-full h-20 rounded-md aspect-square"> img here </span>
                    </button>
                    <button>
                      <span className="object-cover w-full h-20 rounded-md aspect-square"> img here </span>
                    </button>
                    <button className="flex items-center justify-center w-full border border-dashed rounded-md aspect-square">
                      <Ellipsis className="w-4 h-4 text-muted-foreground" />
                      <span className="sr-only">Upload new pic of your pet</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="w-full max-w-xl p-4 rounded-lg shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">Entre em contato com o dono do pet</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleContactSubmit} size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div >
  )
}
