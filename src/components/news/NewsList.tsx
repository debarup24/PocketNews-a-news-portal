"use client"

import { fetchNews } from '@/lib/fetchNews';
import { NewsItems } from '@/types/news';
import React, { useEffect, useState } from 'react'

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

  return (
    <div>NewsList</div>
  )
}

export default NewsList