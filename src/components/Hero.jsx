import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import Send from "../assets/send.png";
import Plus from "../assets/plus.png";
import { FaBeer } from "react-icons/fa";
function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setUsers(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <section className="w-full px-16 mt-12">
        <div className="flex items-center justify-center">
          <div className="mr-auto">
            <h1 className="text-black text-6xl font-bold">
              {`Good Morning, ${users.name}`}
            </h1>
            <p className="text-black text-2xl mt-3">
              Check all your incoming and outgoing transactions here
            </p>
          </div>
          <Avatar />
        </div>
        <div className="flex mt-[4.5rem] gap-x-12">
          <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
            <p>Account No.</p>
            <p className="mt-3 font-bold">{`${users[0]?.account_number}`}</p>
          </div>
          <div className="bg-white p-12 rounded-2xl w-full text-black">
            <p>Balance</p>
            <span className="flex items-center mt-3 gap-x-2">
              <p className="font-bold">
                {showBalance ? `${users[0]?.balance}` : "Rp ********"}
              </p>
              <img
                src={viewIcon}
                alt="view"
                className="w-4 h-4 object-cover cursor-pointer"
                onClick={() => setShowBalance((prev) => !prev)}
              />
            </span>
          </div>
          <div className="bg-[#19918F] p-2 rounded-lg w-10 h-10 flex items-center justify-center ml-auto my-16">
            <img src={Send} />
          </div>
          <div className="bg-[#19918F] p-2 rounded-lg w-10 h-10 flex items-center justify-center ml-auto my-16">
            <img src={Plus} />
          </div>
        </div>
        <div className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
          <form>
            <input
              className="text-black placeholder-grey text-xs mr-auto py-2 rounded-[5px] "
              type="text"
              placeholder="Search"
            />
          </form>
          <h3>
            Lets go for a <FaBeer />?
          </h3>
          {/* <p className="test-xs  text-black">Show</p> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
