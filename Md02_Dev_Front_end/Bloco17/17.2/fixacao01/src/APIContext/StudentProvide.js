import { useState } from "react";
import StudentContext from "./contexts/StudentContext";

function StudentProvider({children}) {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  const objProvider = {
    fullName,
    setFullName,
    age,
    setAge,
    city,
    setCity,
    module,
    setModule,
  }

  return (
    <StudentContext.Provider value={ objProvider }>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;