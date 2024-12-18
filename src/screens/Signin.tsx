import { FormEvent, useContext, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Eye, EyeSlash } from "@phosphor-icons/react"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, Link } from 'react-router-dom'

import { api } from '@/services/api'
import { UserContext } from '@/Context/userContext'

export function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { defineUserSession } = useContext(UserContext)

  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()

    await api.post(`/sessions`, {
      email,
      password
    }).then(res => {

      // console.log(`response do then`, res)
      if (res.status === 200) {

        const user = res.data?.user

        // console.log('user', user)

        toast('Authenticated !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {

            //atualizar usuario logado
            defineUserSession(user)

            console.log('user admin? ', user.admin)

            if (user.admin) {
              return navigate('/admin', {
                state: {
                  user
                }
              })
            }
            navigate('/home', {
              state: {
                user
              }
            })
          }
        })
      }
    }).catch(err => {
      console.log(err)
      toast.error(err)
    })
  }

  function toggleShowPass() {
    return setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('assets/img/bg.png')] bg-cover bg-center">
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
      <Card className="rounded-lg shadow-lg max-w-[370px] w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 card-body">
          <div className="text-center mb-2.5">
            <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">Sign In</h3>
            <div className="flex items-center justify-center font-medium">
              <span className="text-sm text-gray-700 me-1.5">
                Need an account?
              </span>
              <Link to="/signup" className="text-sm text-blue-500">Sign up</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <a className="flex items-center justify-center h-8 gap-3 px-3 text-sm font-medium border-transparent rounded-sm shadow-md cursor-pointer bg-zinc-100 hover:shadow-yellow-200" href="#">
              <img alt="google" className="size-3.5 shrink-0"
                src="src/assets/brand-logo/google.svg" />
              Use Google
            </a>
            <a className="flex items-center justify-center h-8 gap-3 px-3 text-sm font-medium border-transparent rounded-sm shadow-md cursor-pointer bg-zinc-100 hover:shadow-yellow-200" href="#">
              <img alt="apple" className="size-3.5 shrink-0 "
                src="src/assets/brand-logo/apple-black.svg" />
              Use Apple
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-full border-t border-gray-200">
            </span>
            <span className="text-xs font-medium text-gray-500 uppercase">
              Or
            </span>
            <span className="w-full border-t border-gray-200">
            </span>
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
              <Link to="/forgotPass" className="text-sm text-blue-500">Forgot password?</Link>
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
              <span onClick={toggleShowPass} className='absolute mt-1 cursor-pointer right-3'>
                {
                  showPassword ? <EyeSlash size={18} color='#99a1b7' /> : <Eye size={18} color='#99a1b7' />
                }
              </span>
            </div>
          </div>
          <label className="flex items-center justify-start w-full gap-2">
            <Input
              className="w-4 h-4 rounded-md"
              name="check"
              type="checkbox"
              value="1"
            />
            <span className="text-sm">
              Remember me
            </span>
          </label>
          <Button
            type="submit"
            className="w-full text-white transition bg-yellow-400 hover:bg-yellow-300"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  )
}
