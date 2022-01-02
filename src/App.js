/** @format */
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LogInPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  return (
    <Container>
      <AppBar />

     <Suspense fallback={<div>Loading...</div>}> 
         <Routes>
           {/* <Route path='/' element={<HomePage/>}/>
           <Route path='/register' element={<RegisterPage/>}/>
           <Route path='/login' element={<LoginPage/>}/> */}
          <Route path="/" element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          } />
          <Route path="/register"  element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
          } />
          <Route path="/login"  element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>} /> 
          <Route path="/contacts" element={
          <PrivateRoute>
            <ContactsPage />
            </PrivateRoute>
          } />
          <Route path="/contacts/addNewContact" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
