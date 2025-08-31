import { Navigate } from "react-router-dom";

// ✅ Fake authentication hook
function useAuth() {
  // For demo, let's pretend user is logged in
  const user = { loggedIn: true }; // change to false to test redirect
  return user;
}

function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth?.loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
