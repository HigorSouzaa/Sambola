function CategoryCallouts() {
  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <a
          className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-video overflow-hidden cursor-pointer"
          href="#"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://images.unsplash.com/photo-1599228148332-263e1d35a823?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          <p className="text-white text-2xl font-bold leading-tight relative z-10">
            Camisas Oficiais
          </p>
        </a>
        <a
          className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-video overflow-hidden cursor-pointer"
          href="#"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://images.unsplash.com/photo-1519214605650-7c50def45a3a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          <p className="text-white text-2xl font-bold leading-tight relative z-10">
            Favoritos dos Fãs
          </p>
        </a>
      </div>
    </section>
  );
}

export default CategoryCallouts;
