import React, { use } from 'react';
const categoryPromise = fetch('/categories.json').then((res)=>res.json())
const Categories = () => {
const category = use(categoryPromise)

    return (
        <div>
            <h2 className='font-bold'>All Categories{category.length}</h2>
        </div>
    );
};

export default Categories;