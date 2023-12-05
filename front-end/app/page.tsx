import { BadgeDollarSign } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <div className='flex pb-50 items-center h-screen'>

        <div className='container space-y-2 p-8 max-w-md h-96 rounded-xl bg-gray-50 shadow-md'>
          <span className='flex items-center gap-2'>
          <BadgeDollarSign className='text-slate-500' size={48} />
          <h1 className='uppercase text-slate-600 font-bold text xl'>Money Manager</h1>
          </span>
          <Input type='email' placeholder='Digite seu e-mail'></Input>
          <Input type='email' placeholder='Digite sua senha'></Input>
          <Button>Enviar</Button>
        </div>
      </div>
    </main>
  )
}
