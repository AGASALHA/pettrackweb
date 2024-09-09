import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'

export function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (email !== 'antonio.alves@gmail.com') {
      return alert('email or password incorrect')
    }
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            Sign In
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Ainda não tem uma conta?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">Cadastrar-se</Link>
        </p>
      </Card>
    </div>
  )
}
