import React from 'react'
import { useHistory } from 'react-router'
import Divider from '../components/Divider'
import List from '../components/List'
import Main from '../components/Main'
import Submit from '../components/Submit'

export default function ListPage() {
    const history = useHistory();

    function goToHandler(item) {
        history.push(item);
    }
    return (
        <Main>
            <Submit goTo={goToHandler} />
            <Divider />
            <List />
        </Main>
    )
}
