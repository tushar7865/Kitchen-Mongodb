import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // <-- use named import

export default function Login() {
  const handleSuccess = (credentialResponse) => {
    if (credentialResponse?.credential) {
      const decoded = jwtDecode(credentialResponse.credential);

      console.log("Google User:", decoded);

      // ✅ Save user info
      localStorage.setItem("user", JSON.stringify(decoded));

      // Redirect to home
      window.location.href = "/";
    } else {
      console.error("No credential found in response");
    }
  };

  const handleError = () => {
    console.log("Google login failed ❌");
  };

  return (
    <div className="login-container">
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
}
