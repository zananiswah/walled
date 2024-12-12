import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import Send from "../assets/send.png";
import Plus from "../assets/plus.png";
import { useTheme } from "../hooks/useTheme";
import ActionButton from "./ActionButton";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);

  const { theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";

  const user = JSON.parse(localStorage.getItem("login"));
  const userName = user ? user.fullName : "User";
  const userBalance = user ? user.balance : 0;
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
    <>
      <section className="w-full px-16 mt-12">
        <div className="flex items-center justify-center">
          <div className="mr-auto">
            <h1 className="text-black text-6xl font-bold">
              {`Good Morning, ${user.name}`}
            </h1>
            <p className="text-black text-2xl mt-3">
              Check all your incoming and outgoing transactions here
            </p>
          </div>
          <Avatar />
        </div>
        {/* 
            show balance */}
        <div className="flex mt-[4.5rem] gap-x-12 mb-10">
          <div
            className="bg-[#19918F] p-12 rounded-2xl w-1/5"
            style={{ backgroundColor: themeColor }}
          >
            <p className="text-white"> Account No.</p>
            <p className="mt-3 font-bold text-white">{`${user.account_number}`}</p>
          </div>
          <div className="flex justify-between bg-white p-12 rounded-2xl w-full text-black">
            <div>
              <p>Balance</p>
              <span className="flex items-center mt-3 gap-x-2">
                <p className="font-bold">
                  {showBalance ? `Rp ${userBalance}` : "Rp ********"}
                </p>
                <img
                  src={viewIcon}
                  alt="view"
                  className="w-4 h-4 object-cover cursor-pointer"
                  onClick={() => setShowBalance((prev) => !prev)}
                />
              </span>
            </div>
            <div className="flex gap-x-6">
              <ActionButton>
                <img src={Plus} alt="plus icon" className="w-8 h-8" />
              </ActionButton>
              <ActionButton>
                <img src={Send} alt="send icon" className="w-8 h-8" />
              </ActionButton>
            </div>
          </div>
        </div>

        {/* <div className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
          <form>
            <input
              className="text-black placeholder-grey text-xs mr-auto py-2 rounded-[5px] "
              type="text"
              placeholder="Search"
            />
          </form>
        </div> */}
      </section>
    </>
  );
}

export default Hero;
