import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navber from "./Navber";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div className="min-h-[57vh]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Root;