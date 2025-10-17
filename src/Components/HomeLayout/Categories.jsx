import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then((res)=>res.json())
const Categories = () => {
const category = use(categoryPromise)

    return (
        <div >
            <h2 className='font-bold'>All Categories ({category.length})</h2>
        <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                category.map(cat=><NavLink key={cat.id} className={'btn bg-base-100 border-none hover:bg-base-300 font-semibold text-accent'} to={`/category/${cat.id}`}>{cat.name}</NavLink>)
            }
        </div>
        
        </div>
    );
};

export default Categories;