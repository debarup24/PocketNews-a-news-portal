import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { NewsItems } from "@/types/news";


export default async function Home() {
  const respones = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news`)
  const news = await respones.json()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
      <Banner/>
     <div className="my-8">
      <h2 className="text-2xl font-bold mb-8"> Latest <span className="text-red-600">NEWS</span></h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5 justify-between">
        {
          news.slice(0, 3).map((item : NewsItems)=> (
            
            <NewsCard key={item._id} item = {item}/>
          ))
        }
      </div>

     </div>
      <NewsLetter/>
      
    </div>

  );
}
