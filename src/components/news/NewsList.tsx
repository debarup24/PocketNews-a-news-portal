"use client"

import { fetchNews } from '@/lib/fetchNews';
import { NewsItems } from '@/types/news';
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import NewsCard from '../NewsCard';

const NewsList = () => {
      const [news, setNews] = useState<NewsItems[]>([]) ;
      const [category, setCategory] = useState<string>("") ;
      const [search, setSearch] = useState<string>("") ;

      useEffect(()=> { 
        const getNews = async () => {
            const data = await fetchNews(category, search) ;
            setNews(data);
        }
        getNews()
      }, [category, search])
    
      console.log(news);
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-10 mb-5 px-4'> 
      {/* Search bar */}
       <SearchBar onSearch = {setSearch} />
       
       {/* category select */}
       <CategoryFilter onCategoryChange = {setCategory}/>
       </div>
      {/* Present News */}
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-between'>
        {
          news.map ((item : NewsItems) => (<NewsCard key={item?._id} item={item}/>))
        }
       </div>

      </div>
  )
}

export default NewsList