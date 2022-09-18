import { useState } from "react";
import StudentContext from "./contexts/StudentContext";

const INITIAL_STATE = {
  fullName: '',
  age: 0,
  city: '',
  module: 'Fundamentos',
}

function StudentProvider({children}) {
  const [formStudent, setFormStudent] = useState(INITIAL_STATE)
  const [students, setStudents] = useState([]);

  const objProvider = {
    students,
    setStudents,
    formStudent,
    setFormStudent
  }

  return (
    <StudentContext.Provider value={ objProvider }>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;