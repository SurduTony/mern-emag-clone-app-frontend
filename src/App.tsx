import { Route, Routes } from "react-router-dom";

import Layout from "./Layouts/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProductPage from "./pages/ProductPage";
import LayoutSidebar from "./Layouts/LayoutSidebar";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <RegisterPage />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Layout>
            <ProductPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/my-profile"
          element={
            <Layout>
              <LayoutSidebar>
                <ProfilePage />
              </LayoutSidebar>
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout>
              <LayoutSidebar>
                <FavoritesPage />
              </LayoutSidebar>
            </Layout>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Layout>
            <h2>Page not found</h2>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
