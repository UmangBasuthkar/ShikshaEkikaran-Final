import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Login } from './Login';
import { SignUpAs } from './SignUpAs';
import { SchoolSignUp } from './SchoolSignUp';
import { CollegeSignUp } from './CollegeSignUp';
import { GovernmentSignUp } from './GovernmentSignUp';
import { SchoolAndCollegeview } from './SchoolAndCollegeview';
import { Governmentview } from './Governmentview';
import { SchoolAndCollegeUpload } from './SchoolAndCollegeUpload';

export const Bundle = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path = '/' element = { <Home/> }/>
                <Route path = 'Login' element = { <Login/> }/>
                <Route path = 'SignUpAs' element = {  <SignUpAs/> }/>
                <Route path = "SchoolSignUp" element = {  <SchoolSignUp/> }/>
                <Route path = "CollegeSignUP" element = {  <CollegeSignUp/> }/>
                <Route path = "GovernmentSignUp" element = {  <GovernmentSignUp/> }/>
                <Route path = "SchoolAndCollegeview" element = { <SchoolAndCollegeview />}/>
                <Route path = "Governmentview" element = { <Governmentview />}/>
                <Route path = "SchoolAndCollegeUpload" element = { <SchoolAndCollegeUpload/> } />
            </Routes>
        </>
    )
}