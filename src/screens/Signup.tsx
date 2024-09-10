import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import { Eye, EyeSlash } from "@phosphor-icons/react"

export function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [passwordConfirmed, setPasswordConfirmed] = useState('')
  const [showPasswordConfirmed, setShowPasswordConfirmed] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (name && email && password) {
      alert('Signup successful!')
      navigate('/home')
    }

    return alert('Please fill in all fields')
  }

  function toggleShowPass() {
    return setShowPassword(!showPassword)
  }
  function toggleShowPassConfirmed() {
    return setShowPasswordConfirmed(!showPasswordConfirmed)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('assets/img/bg.png')] bg-cover bg-center">
      <Card className="rounded-lg shadow-lg max-w-[370px] w-full">
        <form onSubmit={handleSubmit} className="card-body flex flex-col gap-5 p-10">
          <div className="text-center mb-2.5">
            <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">Sign Up</h3>
            <div className="flex items-center justify-center font-medium">
              <span className="text-sm text-gray-700 me-1.5">
                Already have an Account ?
              </span>
              <Link to="/" className="text-sm text-blue-500">Sign in</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <a className="bg-zinc-100 rounded-sm h-8 px-3 font-medium text-sm gap-3 items-center justify-center cursor-pointer flex border-transparent shadow-md hover:shadow-yellow-200" href="#">
              <img alt="google" className="size-3.5 shrink-0"
                src="src/assets/brand-logo/google.svg" />
              Use Google
            </a>
            <a className="bg-zinc-100 rounded-sm h-8 px-3 font-medium text-sm gap-3 items-center justify-center cursor-pointer flex border-transparent shadow-md hover:shadow-yellow-200" href="#">
              <img alt="apple" className="size-3.5 shrink-0 "
                src="src/assets/brand-logo/apple-black.svg" />
              Use Apple
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-t border-gray-200 w-full">
            </span>
            <span className="text-xs text-gray-500 font-medium uppercase">
              Or
            </span>
            <span className="border-t border-gray-200 w-full">
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-normal text-gray-900" htmlFor="name">Name</label>
            <Input
              type="text"
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 outline-none focus:outline-none focus:border-yellow-400 "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-normal text-gray-900">Email</label>
            <Input
              type="email"
              value={email}
              placeholder='email@emai.com'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 outline-none focus:outline-none focus:border-yellow-400 "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="text-sm font-normal text-gray-900">Password</label>
            </div>
            <div className='relative flex items-center justify-center'>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 outline-none focus:outline-none focus:border-yellow-400 "
                required
              />
              <span onClick={toggleShowPass} className='absolute right-3 mt-1 cursor-pointer'>
                {
                  showPassword ? <EyeSlash size={18} color='#99a1b7' /> : <Eye size={18} color='#99a1b7' />
                }
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <label className="text-sm font-normal text-gray-900">Password</label>
            </div>
            <div className='relative flex items-center justify-center'>
              <Input
                type={showPasswordConfirmed ? 'text' : 'password'}
                value={passwordConfirmed}
                placeholder='Enter Password'
                onChange={(e) => setPasswordConfirmed(e.target.value)}
                className="w-full mt-1 outline-none focus:outline-none focus:border-yellow-400 "
                required
              />
              <span onClick={toggleShowPassConfirmed} className='absolute right-3 mt-1 cursor-pointer'>
                {
                  showPassword ? <EyeSlash size={18} color='#99a1b7' /> : <Eye size={18} color='#99a1b7' />
                }
              </span>
            </div>
          </div>
          <label className="flex w-full items-center justify-start gap-2">
            <Input
              className="rounded-md h-4 w-4"
              name="check"
              type="checkbox"
              value="1"
            />
            <div className="flex gap-1">
              <span className="text-sm">
                I accept
              </span>
              <Link to="/termsAndConditions" className="text-sm text-blue-500">Terms & Conditions</Link>
            </div>
          </label>
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-white hover:bg-yellow-300 transition"
          >
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  )
}
