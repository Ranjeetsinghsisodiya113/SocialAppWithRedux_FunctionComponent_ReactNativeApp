
const initailState = [];

import { ATTEMPT_RIGHT, ADD_POST, EDIT_POST, DELETE_POST } from "./constants"
export const reducers = (state = initailState, action) => {

    switch (action.type) {
        case ATTEMPT_RIGHT:
            var array = [
                ...state,
                action.data
            ]
            for (let i = 0; i < array.length; i++) {

                for (let j = 0; j < array.length - 1; j++) {

                    if (array[j].question_id
                        >= array[j + 1].question_id) {
                        let x = array[j]
                        let y = array[j + 1]
                        array[j] = y
                        array[j + 1] = x


                    }

                }
                console.log(array)
            }
            return array

        case ADD_POST:

            var array = [
                ...state,
                action.data
            ]
            return array;

        case EDIT_POST:
            var array = [
                ...state,
            ]
            for (let i = 0; i < array.length; i++) {
                if (array[i].post_id === action.data.post_id) {
                    array[i] = action.data
                }
            }
            return array;

        case DELETE_POST:

            var array = [
                ...state,
            ]
            for (let i = 0; i < array.length; i++) {
                if (array[i].post_id === action.data) {
                    array.splice(i, 1)
                }
            }
            return array;

        default:
            return state;
    }

}