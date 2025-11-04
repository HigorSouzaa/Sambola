import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <div className="absolute left-0 top-0 w-full p-6 lg:p-10">
      <header className="flex items-center justify-start">
        <Link to={"/"} className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Logo Sambola" className="w-10" />
          <h3 className="text-2xl font-bold text-[#111111]  tracking-widest ml-3">
            SAMBOLA
          </h3>
        </Link>
      </header>
    </div>
  );
}

export default AuthHeader;
