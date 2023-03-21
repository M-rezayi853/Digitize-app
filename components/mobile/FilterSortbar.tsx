import { FC } from 'react'

interface Props {}

const FilterSortbar: FC<Props> = (): JSX.Element => {
  return (
    <div className='flex items-center justify-between gap-x-4'>
      <div className='bg-white rounded p-2 flex items-center justify-start w-1/2'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-6 h-6 fill-orange-600'
          >
            <path
              fillRule='evenodd'
              d='M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <span className='text-sm font-medium text-slate-800 mr-3'>
          محبوب ترین
        </span>
      </div>

      <div className='bg-white rounded p-2 flex items-center justify-start w-1/2'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 stroke-gray-400'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
            />
          </svg>
        </div>
        <span className='text-sm font-medium text-slate-800 mr-3'>
          فیلر: اپل
        </span>
      </div>
    </div>
  )
}

export default FilterSortbar
