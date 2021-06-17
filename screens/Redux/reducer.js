import { IMAGES_LIST } from "./ActionType";

initialState = {
    images_list: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IMAGES_LIST:
            return {
                ...state,
                images_list: action.data,
            }
        default:
            return state
    }
}

