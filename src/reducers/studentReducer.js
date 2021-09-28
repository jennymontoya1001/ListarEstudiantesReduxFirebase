import { typesStudent } from "../types/types";

const initialState = {
    students: []
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesStudent.register:
            return{
                students: [action.payload]
            }
         case typesStudent.list:
             return{
                 students: [...action.payload]
             }
    
        default:
           return state;
    }

}