import React from 'react'
import type { Category } from '../types'

function Category(props: Category) {

    const { name, color } = props
    return (
        <div
            className={`rounded-full ${color} px-4 py-1 text-sm font-medium text-blue-900 transition-transform hover:scale-105`}
        >
            {name}
        </div>
    )
}

export default Category