import { useState, type FormEvent } from "react";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Register:", formData);
    // Aqui você pode adicionar a lógica de registro
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="name"
          >
            Nome Completo
          </label>
          <input
            className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="register-email"
          >
            E-mail
          </label>
          <input
            className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
            id="register-email"
            name="email"
            placeholder="Digite seu e-mail"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="register-password"
          >
            Senha
          </label>
          <div className="relative flex w-full items-center">
            <input
              className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 pr-10 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
              id="register-password"
              name="password"
              placeholder="Crie uma senha"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
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

        <div className="flex flex-col">
          <label
            className="text-[#1A1A1A] dark:text-white pb-2 text-sm font-medium"
            htmlFor="confirm-password"
          >
            Confirmar Senha
          </label>
          <div className="relative flex w-full items-center">
            <input
              className="form-input h-12 w-full rounded-lg border border-[#dbdfe6] bg-white p-3 pr-10 text-base text-[#1A1A1A] placeholder:text-[#60728a] focus:border-[#0A2342] focus:outline-0 focus:ring-2 focus:ring-[#0A2342]/30 dark:border-[#334155] dark:bg-[#1e293b] dark:text-white dark:placeholder:text-[#94a3b8] dark:focus:border-[#0A2342]"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              aria-label="Alternar visibilidade da senha"
              className="absolute right-3 text-[#60728a] dark:text-[#94a3b8]"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input
            className="form-checkbox h-4 w-4 rounded border-[#dbdfe6] text-[#0A2342] focus:ring-[#0A2342]/50 dark:border-[#334155] dark:bg-[#1e293b]"
            id="agree-terms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label
            className="text-[#60728a] dark:text-[#94a3b8]"
            htmlFor="agree-terms"
          >
            Eu concordo com os{" "}
            <a className="font-medium text-[#0A2342] hover:text-[#FFD700]" href="#">
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a className="font-medium text-[#0A2342] hover:text-[#FFD700]" href="#">
              Política de Privacidade
            </a>
          </label>
        </div>

        <button
          className="mt-4 hover:cursor-pointer flex h-12 w-full items-center justify-center rounded-lg bg-[#0A2342] px-4 text-base font-bold text-white transition-colors hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#0A2342]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 dark:focus:ring-offset-[#101722]"
          type="submit"
        >
          Criar Conta
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

export default RegisterForm;
