function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-600 size-5">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
              </div>
              <h2 className="text-[#111111] dark:text-white text-lg font-bold">
                SAMBOLA
              </h2>
            </div>
            <p className="text-sm">
              A loja oficial do maior time do mundo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#111111] dark:text-white mb-4">
              Atendimento ao Cliente
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Envio e Devoluções
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Guia de Tamanhos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#111111] dark:text-white mb-4">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Carreiras
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold text-[#111111] dark:text-white mb-4">
              Junte-se à Nossa Newsletter
            </h4>
            <p className="text-sm mb-4">
              Receba atualizações exclusivas sobre novos kits, ofertas especiais
              e muito mais.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-600 focus:ring-blue-600 text-sm text-[#111111] dark:text-white"
                placeholder="Digite seu email"
                type="email"
              />
              <button
                className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                type="submit"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 SAMBOLA FC. Todos os Direitos Reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
              Política de Privacidade
            </a>
            <a className="hover:text-blue-600 transition-colors cursor-pointer" href="#">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
