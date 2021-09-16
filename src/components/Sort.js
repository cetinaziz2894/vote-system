import React from 'react'
import { connect } from 'react-redux'
import { setSort } from '../actions'
import '../styles/sort.css'

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSort: (e) => dispatch(setSort(e.target.value)),
    }
}

export const dropdownValues = [
    {
        name:"Order By",
        value:"SORT_LIST_DEFAULT"
    },
    {
        name:"Most Voted (Z -> A)",
        value:"SORT_LIST_MOST_VOTED"
    },
    {
        name:"Less Voted (A -> Z)",
        value:"SORT_LIST_LESS_VOTED"
    },

]

const Sort = ({sort, onChangeSort}) => {
    return (
        <div className="dropdown">
            <select className="classic" name="sort" id="sort" onChange={onChangeSort}  value={sort}>
                {
                    dropdownValues && dropdownValues.map(el => 
                        <option key={el.value} value={el.value}>{el.name}</option>
                    )
                }
            </select>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Sort)
