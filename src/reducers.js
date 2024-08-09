import {
    ON_SEARCH_CHANGE,
    ON_ROBOTS_PENDING,
    ON_ROBOTS_SUCCESS,
    ON_ROBOTS_FAILED
} from './constents';

const initialSearch = {
    searchField : ''
}

export const searchChange = (state=initialSearch , action={}) => {
    switch(action.type){
        case ON_SEARCH_CHANGE:
            return {...state , searchField : action.payload}
        default:
            return state;
    }
}

const initialRobots = {
    robots : [],
    isPending : false,
    error : ''
}

export const robotsData = (state=initialRobots , action={}) => {
    switch(action.type){
        case ON_ROBOTS_PENDING:
            return {...state , isPending : true}
        case ON_ROBOTS_SUCCESS:
            return {...state , isPending : false , robots : action.payload}
        case ON_ROBOTS_FAILED:
            return {...state , isPending : false, error : action.payload}
        default:
            return state;
    }
}