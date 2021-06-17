
//Api_Call.js
import { globalAction, IMAGES_LIST } from '../Redux';

export function getImagesFromServer(count, dispatch) {
    return new Promise((resolve, reject) => {
        fetch(`http://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            }
            ).then(responseJson => {
                dispatch(globalAction(IMAGES_LIST, responseJson))
                resolve(responseJson)
            }).catch(error => {
                reject(error.toString())
            })
    })
}