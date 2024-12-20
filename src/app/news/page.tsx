import NewsList from '@/components/news/NewsList'
import React from 'react'

const Newspage = () => {
  return (
    <section className='py-12'>
    <h2 className='text-2xl font-semibold'>Latest <span className='text-red-600'>News</span></h2>
    <NewsList/>
    </section>
  )
}

export default Newspage