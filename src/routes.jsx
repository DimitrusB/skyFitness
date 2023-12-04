import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import { ProfilePage } from "./pages/profile/Profile";
import { CoursesPage } from "./pages/courses/Сourses";
import { NotFoundPage } from "./pages/notFound/NotFound";
import { WorkOut } from "./pages/workoutPage/workout";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getUserLessons, auth } from "./api/api";
import { useDispatch } from "react-redux";
import { signIn } from "./store/actions/creators";
import { ProtectedRoute } from "./components/navigate";
import LoadingSpinner from "./components/loadingSpinner/loadingSpinner";


export const AppRoutes = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          try {
            const userData = await getUserLessons();
            dispatch(signIn(userData));
            setUserData(userData);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        })();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
	return (<LoadingSpinner />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute userData={userData} />}>
          <Route
            path="/profile"
            element={
              <ProfilePage userData={userData} setUserData={setUserData} />
            }
          />
          <Route
            path="/workout"
            element={<WorkOut userData={userData} setUserData={setUserData} />}
          />
        </Route>

        <Route
          path="/"
          element={<Main userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/course/:id"
          element={
            <CoursesPage userData={userData} setUserData={setUserData} />
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
