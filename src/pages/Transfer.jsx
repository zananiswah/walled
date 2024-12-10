import Navbar from "../components/Navbar";
function Transfer() {
  return (
    <>
      <Navbar />
      <form>
        <input className="text-black" type="text" placeholder="To" />
      </form>
    </>
  );
}

export default Transfer;
