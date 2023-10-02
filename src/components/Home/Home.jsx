import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Home = () => {
    const info = useContext(AuthContext)
    return (
        <div>
            This is home {info.name}
        </div>
    );
};

export default Home;