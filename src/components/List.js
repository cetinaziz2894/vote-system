import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import Sort from './Sort'
import '../styles/list.css'

export default function List() {
    return (
        <div className="content">
            <Sort />
            <Card />
            <Card />
            <Card />
            <Pagination />
        </div>
    )
}
