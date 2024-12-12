import { useEffect, useState } from "react";
import avatarImg from "../assets/avatar.png";

function Avatar({ name }) {
  const [isAvatarActive, setIsAvatarActive] = useState(false);
  const user = JSON.parse(localStorage.getItem("login"));
  // const [users, setUsers] = useState([]);
  // const users = JSON.parse(localStorage.getItem("login"));
  // useEffect(() => {
  //   async function getData() {
  //     const url = "http://localhost:3000/users";
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       console.log(json);
  //       setUsers(json);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   getData();
  // }, []);
  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
        <p className="text-black font-bold">{user.name}</p>
        <p className="text-black">Personal Account</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img src={avatarImg} alt="avatar" className="rounded-full" />
      </div>
    </div>
  );
}

export default Avatar;
