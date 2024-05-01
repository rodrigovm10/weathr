import { Button } from '@/components/common/Button'
import { IconLocation } from '@tabler/icons-react'

export function SaveDefault() {
  return (
    <Button
      className='w-auto px-4'
      text='Save as default'
      icon={<IconLocation className='size-4 my-auto' />}
      onClick={() => {}}
    />
  )
}
