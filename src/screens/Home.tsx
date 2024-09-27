import { useLocation } from "react-router-dom";

export function Home() {

  const location = useLocation()
  const { user } = location.state || {}  // Garantir que o state existe
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page {user.name} !</h1>
    </div>
  )
}
