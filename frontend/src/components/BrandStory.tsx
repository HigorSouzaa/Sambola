function BrandStory() {
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 bg-white dark:bg-gray-900/50 p-8 rounded-xl">
        <div
          className="w-full h-80 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGVIWUEAHImK7pBQradM-zTt_LD7hXOaYcEHifCskWYD9-rEPyHwPmyFsLP9GyrPMkyr05a7nPXwQ1kiKfCt3HL_iS4Bz4tikUFubsFfpvnT-S2OHa6Mtrg4OVjizCwVZdqMvh8L7noSs4GUEXTvNTa2m8_CPVlaTIGZI-4IB-rR3-YEkEtjgoKY3c8vpmOOdvKTcWfSv4fNJLPnsfJsinFR-ZwfHJg3wvWp7lV-VtAO0Rcm4mk-Uj8utAz7NnZx9d_fTNqqYi3OU')",
          }}
        ></div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#111111] dark:text-white">
            Um Legado de Paixão
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Mais do que um clube. Somos uma família, unidos pelas cores, pela
            história e pelo espírito inquebrável do SAMBOLA. Esta é a nossa
            história, tecida em cada fio.
          </p>
          <div className="mt-2">
            <a
              className="text-blue-600 font-bold hover:underline cursor-pointer"
              href="#"
            >
              Descubra Nossa História
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
