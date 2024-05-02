import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center'>
      <h1 className='text-5xl font-bold'>Error 404</h1>
      <p className='opacity-80'>The page you are trying to access does not exist</p>
      <Link to='/'>
        <Button
          text='Go home'
          className='w-fit px-2'
        />
      </Link>
    </div>
  )
}
