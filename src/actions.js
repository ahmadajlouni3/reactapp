import {
    ON_SEARCH_CHANGE,
    ON_ROBOTS_PENDING,
    ON_ROBOTS_SUCCESS,
    ON_ROBOTS_FAILED
} from './constents';


export const onSearchChange = (text) => ({
    type: ON_SEARCH_CHANGE,
    payload : text
})

export const onRequestRobots = () => (dispatch) => {
    dispatch({
        type: ON_ROBOTS_PENDING,
        payload : "PENDING"
    })
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: ON_ROBOTS_SUCCESS,
            payload : data
        })
    })
    .catch(err => {
        dispatch({
            type : ON_ROBOTS_FAILED,
            payload : err
        })
    })
}