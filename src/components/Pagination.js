import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { setPage } from '../actions';
import '../styles/pagination.css';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePage: (page) => dispatch(setPage(page)),
    }
}

function PageNumber(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }

const Pagination = ({page, onChangePage}) => {

    const {list} = useSelector(state => state);
    return (
        <div className="pagination">
            {
                page > 1 ? <div className="prev" onClick={() => onChangePage(page-1)}>
                <FaAngleLeft />
            </div> : null
            }
            
            <div className="pages">
                {
                    page && <PageNumber numTimes={Math.ceil(list.length/5)}>
                        {(index) => <p className={(page === index ? "boxed-page" : null)} key={index}>{index}</p>}
                      </PageNumber>
                }
            </div>
            {
                (page * 5) - list.length < 0 ? <div className="next" 
                onClick={() => {onChangePage(page+1)}}>
                <FaAngleRight />
            </div> : null
            }
            
        </div>
    )
}
export default connect(null, mapDispatchToProps)(Pagination)