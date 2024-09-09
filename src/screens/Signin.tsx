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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition" onClick={handleSubmit}>Sign In</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Ainda não tem uma conta?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}
