import { useContext } from "react";
import StudentContext from "../APIContext/contexts/StudentContext";

function FormStudent() {
  const { fullName, setFullName, age, setAge } = useContext(StudentContext);
  const { city, setCity, module, setModule } = useContext(StudentContext);

  return (
    <form>
      <label htmlFor="txtFullName">
        Nome completo:
        <input
         type="text"
         value={fullName}
         id="txtFullName"
         onChange={() => setFullName(fullName)}
        />
      </label>
    </form>
  );
}

export default FormStudent;