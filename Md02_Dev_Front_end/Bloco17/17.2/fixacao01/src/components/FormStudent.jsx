import { useContext } from "react";
import StudentContext from "../APIContext/contexts/StudentContext";

function FormStudent() {
  const { fullName, setFullName, age, setAge } = useContext(StudentContext);
  const { city, setCity, module, setModule, students, setStudents } = useContext(StudentContext);

  const handleChange = ({target}, func) => {
    func(target.value);
  }

  const saveStudent = (event) => {
    event.preventDefault();
    setStudents([...students, {fullName, age, city, module}])
  }

  return (
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={saveStudent}>
      <label htmlFor="txtFullName">
        Nome completo:
        <input
         type="text"
         name="fullName"
         value={fullName}
         id="txtFullName"
         onChange={(target) => handleChange(target, setFullName)}
        />
      </label>
      <label htmlFor="txtAge">
        Idade:
        <input
         type="number"
         name="age"
         value={age}
         id="txtAge"
         onChange={(target) => handleChange(target, setAge)}
        />
      </label>
      <label htmlFor="txtCity">
        Cidade:
        <input
         type="text"
         name="city"
         value={city}
         id="txtCity"
         onChange={(target) => handleChange(target, setCity)}
        />
      </label>
      <label htmlFor="chkModuloFundamentos">
        <input
          type="radio" 
          name="modulo" 
          id="chkModuloFundamentos"
          value={ 'Fundamentos' }
          checked={ module === 'Fundamentos' }
          onChange={(target) => handleChange(target, setModule)}
        />
        Fundamentos
      </label>
      <label htmlFor="chkModuloFrontEnd">
        <input
          type="radio" 
          name="modulo" 
          id="chkModuloFrontEnd"
          value={ 'Front-End' }
          checked={ module === 'Front-End' }
          onChange={(target) => handleChange(target, setModule)}
        />
        Front-End
      </label>
      <label htmlFor="chkModuloBackEnd">
        <input 
          type="radio" 
          name="modulo" 
          id="chkModuloBackEnd"
          value={ 'Back-End' }
          checked={ module === 'Back-End' }
          onChange={(target) => handleChange(target, setModule)} 
        />
        Back-End
      </label>
      <label htmlFor="chkModuloCC">
        <input 
          type="radio" 
          name="modulo" 
          id="chkModuloCC"
          value={ 'Ciência da Computação' }
          checked={ module === 'Ciência da Computação' }
          onChange={(target) => handleChange(target, setModule)} 
        />
        Ciência da Computação
      </label>
      <button type="submit">Salvar Dados</button>

      <ul>
        {students.map(({fullName, age, city, module}, index) => (
          <li key={ index }>
            <p>Nome: {fullName}</p>
            <p>age: {age}</p>
            <p>city: {city}</p>
            <p>modulo: {module}</p>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default FormStudent;