import { useContext } from "react";
import StudentContext from "../APIContext/contexts/StudentContext";

function FormStudent() {
  const { formStudent, setFormStudent, students, setStudents } = useContext(StudentContext);
  const { fullName, age, city, module, } = formStudent;

  const handleChangeDefault = ({target: { value }}, name) => {
    setFormStudent((prev) => ({...prev, [name]: value}));
  }

  const saveStudent = (event) => {
    event.preventDefault();
    setStudents((prev) => ([...prev, {fullName, age, city, module}]))
    setFormStudent({
      fullName: '',
      age: 0,
      city: '',
      module: 'Fundamentos',
    });
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
         onChange={(target) => handleChangeDefault(target, 'fullName')}
        />
      </label>
      <label htmlFor="txtAge">
        Idade:
        <input
         type="number"
         name="age"
         value={age}
         id="txtAge"
         onChange={(target) => handleChangeDefault(target, 'age')}
        />
      </label>
      <label htmlFor="txtCity">
        Cidade:
        <input
         type="text"
         name="city"
         value={city}
         id="txtCity"
         onChange={(target) => handleChangeDefault(target, 'city')}
        />
      </label>
      <label htmlFor="chkModuloFundamentos">
        <input
          type="radio" 
          name="modulo" 
          id="chkModuloFundamentos"
          value={ 'Fundamentos' }
          checked={ module === 'Fundamentos' }
          onChange={(target) => handleChangeDefault(target, 'module')}
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
          onChange={(target) => handleChangeDefault(target, 'module')}
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
          onChange={(target) => handleChangeDefault(target, 'module')} 
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
          onChange={(target) => handleChangeDefault(target, 'module')} 
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