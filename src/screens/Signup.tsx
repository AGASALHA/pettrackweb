import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (name && email && password) {
      alert('Signup successful!')
      navigate('/home')
    }

    return alert('Please fill in all fields')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1"
              required
            />
          </div>
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
            Sign Up
          </Button>
          <p className="text-center text-gray-600 mt-4">
            Já possui uma conta?{' '}
            <Link to="/" className="text-blue-500 hover:underline">Sign in</Link>
          </p>
        </form>
      </Card>
    </div>
  )
}
