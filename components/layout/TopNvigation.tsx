import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";

function TopNavigation() {
  return (
    <div className="bg-white dark:bg-black pt-2">
      <nav className="flex justify-between mx-5">
        <h1 className="text-blue-800 text-2xl font-black">recipeHUB</h1>
        <ul className="text-xs flex items-center justify-between gap-3">
          <li className="flex items-center gap-1 justify-between transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300">
            <MdOutlineAccountCircle
              // onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
            <Link href="/">Log In</Link>
          </li>

          <li className="bg-blue-800 text-white py-1 px-2 shadow-lg rounded-2xl" >
            <Link href="/">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex justify-between text-sm p-4">
        <li>Recipe generator</li>
        <li>My recipe</li>
        <li>Best Recipe</li>
      </ul>
    </div>
  );
}

export default TopNavigation;
