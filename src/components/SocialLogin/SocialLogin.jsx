import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
    }
  return (
    <div className="py-4 px-8">
        
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
           
          <FaGoogle size={20} />
         Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
