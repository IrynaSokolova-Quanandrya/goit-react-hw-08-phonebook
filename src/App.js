/** @format */
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import { ProgressBar } from "react-bootstrap";
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
  const isRefreshingPage = useSelector(authSelectors.getIsRefreshingPage)

  useEffect(()=>{
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  return (
    <Container>
      <AppBar />

     {!isRefreshingPage ? <Suspense fallback={<div><ProgressBar striped variant="warning" now={60} /></div>}> 
         <Routes>
          <Route path="/" element={
            <PublicRoute navigateTo='/contacts'>
              <HomePage />
            </PublicRoute>
          } />
          <Route path="/register"  element={
          <PublicRoute navigateTo='/contacts' restricted>
            <RegisterPage />
          </PublicRoute>
          } />
          <Route path="/login"  element={
          <PublicRoute navigateTo='/contacts' restricted>
            <LoginPage />
          </PublicRoute>
        } /> 
          <Route path="/contacts" element={
          <PrivateRoute navigateTo='/login'>
            <ContactsPage />
            </PrivateRoute>
          } />
          <Route path="/contacts/addNewContact" element={
            <PrivateRoute navigateTo='/login'>
            <ContactForm />
            </PrivateRoute>
          }/>
        </Routes>
      </Suspense> : <b>Loading...</b>}
    </Container>
  );
}

export default App;
