import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../HomeLayout/NewsCard';

const CategoryNews = () => {

    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id,data)

const [categoryNews,setCategoryNews]=useState([])


useEffect(()=>{
    if(id=='0'){
        setCategoryNews(data)
        return;
    }else if(id =='1'){
const filteredNews = data.filter(news=>news.others.is_today_pick == true)
        setCategoryNews(filteredNews)
    }else{
        const filteredNews = data.filter(news=>news.category_id == id)
    setCategoryNews(filteredNews)
    }
   
},[data,id])





    return (
        <div>
<h2 className='font-bold mb-5'>Total <span className='text-red-600'>{categoryNews.length}</span> news  found</h2>
<div className='gap-5 grid grid-cols-1'>
{
   categoryNews.map(news=><NewsCard news={news} key={news.id}></NewsCard>) 
}
</div>
        </div>
    );
};

export default CategoryNews;