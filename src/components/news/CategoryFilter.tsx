import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

interface CategoryFilterProps { onCategoryChange : (category : string) => void }

const CategoryFilter = ({onCategoryChange} : CategoryFilterProps ) => {
    const categories = ["all", "tech", "health", "sports", "business"]
  return (
    <div className='flex gap-2 items-center justify-center'>
        <h3 className='font-bold text-lg flex-shrink-0'>Filter by category: </h3>
        <Select onValueChange={(value) => onCategoryChange(value === "all" ? '' : value)}>
  <SelectTrigger className="w-[180px] border rounded-md capitalize">
    <SelectValue placeholder="Select News Category" />
  </SelectTrigger>
  <SelectContent>
    {
        categories.map((category) => <SelectItem className='capitalize ' key={category} value={category}>{category}</SelectItem> )
    }
    
  </SelectContent>
</Select>

    </div>
  )
}

export default CategoryFilter