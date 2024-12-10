import logo from "../assets/logo.png";
import cover from "../assets/cover.png";
import { NavLink, Link } from "react-router";
import DashboardLayout from "./DashboardLayout";

function Login() {
  return (
    <>
      <div className="grid h-screen grid-cols-2 flex flex-col lg:flex-row items-center">
        <div>
          <img
            src={logo}
            alt="walled logo"
            className="flex mx-auto justify-between items-center py-10"
          />
          <label class="blockpy-18"> </label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="block w-64 mb-6 px-4 py-2 font-bold placeholder-black flex mx-auto justify-between items-center px-8 text-sm"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="block w-64 mb-6 px-4 py-2 font-bold placeholder-black flex mx-auto justify-between items-center px-8 text-sm"
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="block w-64 mb-6 px-4 py-2 font-bold placeholder-black flex mx-auto justify-between items-center px-8 text-sm"
          ></input>
          <input
            type="text"
            placeholder="No HP"
            className="block w-64 mb-6 px-4 py-2 font-bold placeholder-black flex mx-auto justify-between items-center px-8 text-sm"
          ></input>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              "text-white cursor-pointer flex mx-auto justify-center items-center px-6 w-64 text-center rounded-l bg-[#19918F]"
            }
          >
            Daftar
          </NavLink>

          <p className="flex mx-auto justify-center items-center py-4 text-xs">
            Sudah punya akun?
            <NavLink
              to="/login"
              className={({ isActive }) => "hover:underline text-xs"}
            >
              Login di sini
            </NavLink>
          </p>
        </div>
        <div>
          <img src={cover} className="w-full" />
        </div>
      </div>
    </>
  );
}

export default Login;
