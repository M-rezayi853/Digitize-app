import { FC } from 'react'

interface Props {}

const AddToCartBtn: FC<Props> = (): JSX.Element => {
  return (
    <div className='fixed md:hidden bottom-0 left-0 right-0 w-full bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.1)] px-4 py-2'>
      <div className='flex items-center justify-between w-full gap-x-4'>
        <button className='py-3 px-4 text-white bg-orange-500 rounded-lg flex-auto'>
          افزودن به سبد خرید
        </button>

        <div className='text-slate-800 font-normal text-xl flex flex-col'>
          <span>28,250,000</span>
          <span className='text-sm font-thin text-start'>تومن</span>
        </div>
      </div>
    </div>
  )
}

export default AddToCartBtn
