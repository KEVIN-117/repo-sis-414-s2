import React from 'react'
import { CategoriesResponse } from '../types'

import Category from './Category'
function Categories(props: CategoriesResponse) {
    const { categories, status } = props

    const colors = [
        { color: 'bg-blue-300' },
        { color: 'bg-yellow-400' },
        { color: 'bg-green-400' },
        { color: 'bg-purple-200' },
        { color: 'bg-amber-300' },
        { color: 'bg-white' },
        { color: 'bg-emerald-300' },
        { color: 'bg-pink-300' },
    ]

    if (status !== 200) {
        return (
            <div>Something went wrong</div>
        )
    }
    return (
        <div className="rounded-2xl bg-blue-600 p-6">
            <h2 className="mb-4 text-2xl font-bold">Category Topics</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)]
                    return (
                        <Category key={category.id} {...category} {...randomColor} />
                    )
                })}
            </div>
        </div>
    )
}


export default Categories