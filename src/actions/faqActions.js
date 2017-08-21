import {GET_FAQ} from './constants'


export function fetchFaq(){

    return function (dispatch){
        dispatch({
            type:GET_FAQ,
            payload:[
                {
                    id:1,
                    title:'Question 1',
                    content:'Lorem  lorem'
                },
                {
                    id:2,
                    title:'Question 2',
                    content:'Lorem  lorem'
                }
            ]
        })
    }
}
