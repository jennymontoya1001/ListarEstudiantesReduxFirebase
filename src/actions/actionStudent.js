import { typesStudent } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs } from "@firebase/firestore";

export const registerStudent = (doc,nom,apell,tel,cel,dir,correo,img) => {
   return( dispatch) => {
       const newStudent = {
           doc,
           nom,
           apell,
           tel,
           cel,
           dir,
           correo,
           img
       }
       addDoc(collection(db,"estudiantes"),newStudent)
       .then(resp => {
           dispatch(registerStudentSincrono(newStudent))
       })
       .catch(error => {
           console.log(error);
       })
   }
}

export const registerStudentSincrono = (estudiante) => {
    return{
        type: typesStudent.register,
        payload: estudiante
    }

}

//Lectura

export const listEstudent = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "estudiantes"));
        const estudiante = [];
        querySnapshot.forEach((doc) => {
            estudiante.push({
                ...doc.data()
            })
        });
        dispatch(list(estudiante));
    }
}

export const list = (estudiantes) => {
    return {
        type: typesStudent.list,
        payload: estudiantes
    }
}

