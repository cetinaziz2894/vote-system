import React from 'react'
import '../styles/sort.css'

export const dropdownValues = [
    {
        name:"Most Voted (Z -> A)",
        value:1
    },
    {
        name:"Less Voted (A -> Z)",
        value:2
    },

]

export default function Sort() {
    return (
        <div className="dropdown">
            <select className="classic" name="sort" id="sort">
                <option value="" disabled defaultValue hidden>Order By</option>
                {
                    dropdownValues && dropdownValues.map(el => 
                        <option key={el.value} value={el.value}>{el.name}</option>
                    )
                }
            </select>
        </div>
    )
}
