import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import SignUp from "../Pages/SignupPage";
import Tasks from "../Pages/TaskPage";
import UserTask from "../Pages/UserTask";
import PrivateRoute from "./PrivateRoute";


export default function AllRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/usertask"
                element={
                    <PrivateRoute>
                        <UserTask />
                    </PrivateRoute>
                }
            />
        

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:id" element={<Tasks />} />
        </Routes>
    );
}
