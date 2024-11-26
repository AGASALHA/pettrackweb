import { createContext, ReactNode, useState } from "react"

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

interface UserContextProviderProps {
  children: ReactNode
}

interface user {
  cep: string
  cpf_cnpj: string
  created_at: string
  email: string
  id: string
  is_active: string
  name: string
  password_hash: string
  updated_at: string
  admin: boolean
}

interface UserContextProps {
  user: user
  defineUserSession: (user: user) => void
}

export function UserContextProvider({ children }: UserContextProviderProps) {

  const [user, setUser] = useState<user>({} as user)


  function defineUserSession(authUser: user) {
    setUser(authUser)
  }

  return (
    <UserContext.Provider value={{
      user,
      defineUserSession
    }}>
      {children}
    </UserContext.Provider>
  )
}
