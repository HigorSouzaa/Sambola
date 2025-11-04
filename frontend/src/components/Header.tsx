import { Link } from "react-router-dom";
import Icon from "./Icons";

function Header() {
  return (
    <header className="w-full h-35 flex flex-col items-center justify-center">
      <div className="w-full flex">
        <div className="flex items-center w-[33%]">
          <Link to={"/"} className="flex items-center gap-3">
            <img src="/img/logo.png" alt="Logo Sambola" className="w-10" />
            <h3 className="text-2xl font-bold text-[#111111]  tracking-widest ml-3">
              SAMBOLA
            </h3>
          </Link>
        </div>
        <div className="flex items-center justify-center w-[33%]">
          <ul className="flex gap-4.5">
            <li className="text-[1.2em] text-[#111111]">Camisas</li>
            <li className="text-[1.2em] text-[#111111]">Jogo</li>
            <li className="text-[1.2em] text-[#111111]">Moletons</li>
            <li className="text-[1.2em] text-[#111111]">Acessorios</li>
            <li className="text-[1.2em] text-[#111111]">Sobre</li>
          </ul>
        </div>
        <div className="flex items-center justify-end w-[33%] gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-gray-800 text-[#111111] dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link
            to="/auth"
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-gray-800 text-[#111111] dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <Icon name="person" size={24} />
          </Link>
          <button className="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-gray-800 text-[#111111] dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-200 text-[#11111] text-xs font-bold">
              3
            </span>
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-[1.2px] mt-5.5"></div>
    </header>
  );
}

export default Header;
