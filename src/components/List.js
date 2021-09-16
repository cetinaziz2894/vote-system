import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import Sort from './Sort'
import '../styles/list.css'
import { connect } from 'react-redux'
import Loader from './Loader'
import { SORT_LIST_LESS_VOTED, SORT_LIST_DEFAULT, SORT_LIST_MOST_VOTED } from '../actions/types'
import Alert from './Alert'

const sortedList = (list, sort) => {
    switch(sort) {
        case SORT_LIST_DEFAULT:
            return list;
        case SORT_LIST_LESS_VOTED:
            return list.sort((a,b) => (a.point > b.point) ? 1 : ((b.point > a.point) ? -1 : 0));
        case SORT_LIST_MOST_VOTED:  
            return list.sort((a,b) => (a.point < b.point) ? 1 : ((b.point < a.point) ? -1 : 0));
        default:
            return list;
    }
}

const mapStateToProps = (state) => {
    return {
        list: sortedList(state.list.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)), state.sort, state.page),
        sort: state.sort,
        page:state.page,
        alert:state.alert,
        listShow: state.list.slice((state.page-1)*5,state.page*5)
    }
}

const List = ({sort, page, alert, listShow}) => {
    return (
        <div className="content">            
            {
                (alert.type === 'removed.') && <Alert alert={alert}/>
            }
            { 
                listShow.length > 0 &&  <Sort sort={sort} /> 
            }
            <div className="list">
            {
                listShow ? ( listShow.length > 0 ? listShow.map((item) => {
                    return <Card key={item.id} {...item} alert={alert} />
                }): <div className="empty">No data ! </div>) : <Loader />
            }
            </div>
            <Pagination page={page} />
        </div>
    )
}
export default connect(mapStateToProps)(List);