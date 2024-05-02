import { cn } from '@/libs/utils'
import { RealTimeWeather } from '@/types/types-rapidapi'

import { IconHeart } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { useSaveLocation } from '@/hooks/useSaveLocation'

export function SaveLocation({ data }: { data: RealTimeWeather }) {
  const { isSaved, handleClickSaveLocation } = useSaveLocation({ data })

  return (
    <Tooltip
      tooltip='Save location'
      className='w-32  left-0 '
    >
      <IconButton
        onClick={handleClickSaveLocation}
        icon={
          <IconHeart
            className={cn('my-auto', isSaved ? 'text-red-500' : 'text-black dark:text-white')}
          />
        }
      />
    </Tooltip>
  )
}
