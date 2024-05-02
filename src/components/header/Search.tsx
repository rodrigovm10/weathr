import { Aside } from '@/components/common/Aside'
import { Button } from '@/components/common/Button'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { IconSearch, IconX, IconMapPin } from '@tabler/icons-react'
import { useSearch } from '@/hooks/useSearch'
import { CardAside } from '../common/CardAside'

export function Search({ className }: { className: string }) {
  const { data, showSidebar, handleChangeSearch, handleClickBarOpen } = useSearch()

  return (
    <>
      <Tooltip tooltip='Search'>
        <IconButton
          className={className}
          icon={<IconSearch />}
          onClick={handleClickBarOpen}
        />
      </Tooltip>
      <Aside isShowing={showSidebar}>
        <section className='h-full mx-5 flex flex-col justify-between'>
          <h3 className='font-normal text-lg mt-5'>Search</h3>
          <section className='text-center mt-10'>
            <input
              type='text'
              className='w-full bg-slate-900 text-white p-1 rounded border-2 border-muted-foreground/20 focus:ring-2 focus:ring-primary focus:border-primary text-sm outline-none'
              placeholder='Barcelona, Ohayo, Tokyo ...'
              onChange={handleChangeSearch}
            />
            <span className='block my-3 text-sm'>{data && `${data?.length} results`}</span>
            <ul className='space-y-3 mb-4'>
              {data?.map(location => (
                <CardAside data={location}>
                  <a href={`/search/${location.url}`}>
                    <div className='flex gap-x-2 ml-2 mt-2'>
                      <IconMapPin className='size-4 self-center' />
                      <h4 className='text-sm font-semibold'>{location.name}</h4>
                    </div>
                    <p className='text-sm text-left ml-3 opacity-70'>
                      {location.region} - {location.country}
                    </p>
                  </a>
                </CardAside>
              ))}
            </ul>
          </section>
          <Button
            icon={<IconX className='size-4 self-center' />}
            className='mt-auto mb-6'
            text='Close'
            onClick={handleClickBarOpen}
          />
        </section>
      </Aside>
    </>
  )
}
