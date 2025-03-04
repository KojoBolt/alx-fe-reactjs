import RegistrationForm from "./assets/components/RegistrationForm.jsx";
import FormikForm from "./assets/components/FormikForm.jsx";
import "./index.css"

function App() {
  return (
    <div>
      <h2>Controlled Components Form</h2>
      <RegistrationForm />

      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
