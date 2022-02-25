import { SpotifyAuthListener } from "react-spotify-auth";
import AuthModal from "../components/Auth/AuthModal";
import SpotifyForm from "../components/Auth/SpotifyForm";
const AuthPage = () => {
  return (
    <>
      <AuthModal />
      <SpotifyForm/>
    </>
  );
};

export default AuthPage;
