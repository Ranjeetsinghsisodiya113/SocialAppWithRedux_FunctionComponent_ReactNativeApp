import { ATTEMPT_RIGHT,ADD_POST,DELETE_POST,EDIT_POST } from "./constants"
export function attemptRight(item){
    return {
        type:ATTEMPT_RIGHT,
        data:item
    }
}

export function addPost(item){
    return {
        type:ADD_POST,
        data:item
    }
}

export function editPost(item){
    return {
        type:EDIT_POST,
        data:item
    }
}

export function deletePost(id){
    return {
        type:DELETE_POST,
        data:id
    }
}

export default{ attemptRight,addPost};

