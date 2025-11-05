import { useState, type FormEvent } from "react";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Entrar:", { email, password, keepSignedIn });
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
            id="email"
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="password"
          >
            Senha
          </label>
          <div className="relative flex w-full items-center">
            <input
              className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 pr-10 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
              id="password"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              aria-label="Alternar visibilidade da senha"
              className="absolute right-3 text-[#60728a] dark:text-[#94a3b8]"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <input
              className="form-checkbox h-4 w-4 rounded border-[#dbdfe6] text-[#0A2342] focus:ring-[#0A2342]/50 dark:border-[#334155] dark:bg-[#1e293b]"
              id="keep-signed-in"
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
            />
            <label
              className="text-[#60728a] dark:text-[#94a3b8]"
              htmlFor="keep-signed-in"
            >
              Manter-me conectado
            </label>
          </div>
          <a
            className="font-medium text-[#0A2342] hover:text-[#FFD700]"
            href="#"
          >
            Esqueceu a senha?
          </a>
        </div>

        <button
          className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-[#0A2342] px-4 text-base font-bold text-white transition-colors hover:bg-opacity-90 hover:cursor-pointer hover:shadow-lg hover:shadow-[#0A2342]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 dark:focus:ring-offset-[#101722]"
          type="submit"
        >
          Entrar
        </button>
      </form>

      <div className="relative my-6 flex items-center">
        <div className="grow border-t border-[#dbdfe6] dark:border-[#334155]"></div>
        <span className="mx-4 shrink text-sm text-[#60728a] dark:text-[#94a3b8]">
          OU
        </span>
        <div className="grow border-t border-[#dbdfe6] dark:border-[#334155]"></div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#dbdfe6] bg-white px-4 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#f4f4f4] dark:border-[#334155] dark:bg-[#182436] dark:text-white dark:hover:bg-[#101722]">
          <img
            className="h-5 w-5"
            alt="Logo do Google"
            src="/img/google.png"
          />
          <span>Google</span>
        </button>
        <button className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#dbdfe6] bg-white px-4 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#f4f4f4] dark:border-[#334155] dark:bg-[#182436] dark:text-white dark:hover:bg-[#101722]">
          <img
            className="h-5 w-5"
            alt="Logo do Facebook"
            src="/img/facebook.png"
          />
          <span>Facebook</span>
        </button>
      </div>
    </>
  );
}

export default SignInForm;
