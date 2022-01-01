/** @format */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LogIn = lazy(() => import("./pages/LoginPage/LogInPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const ContactForm = lazy(() => import("./pages/ContactForm/ContactForm"));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contacts/addNewContact" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
