/** @format */
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/pages/HomePage/HomePage";

const RegisterPage = lazy(() => import("./components/pages/RegisterPage"));
const LogIn = lazy(() => import("./components/pages/LoginPage/LogInPage"));
const ContactsPage = lazy(() =>
  import("./components/pages/ContactsPage/ContactsPage")
);

function App() {
  // const [value, setValue] = useState("");
  // const handleChange = (e) => setValue(e.target.value);
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
      {/* <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={value} onFilterChange={handleChange} />
      <ContactList filter={value} />
    </div> */}
    </Container>
  );
}

export default App;
