function AuthSideBanner() {
  return (
    <div className="relative hidden h-full items-center justify-center bg-[#0A2342] p-12 lg:flex">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBCf1vEoAzwqF9WrESzb703qbKuYmhvrOFiwrcL9pwZvOk_hTk_3C0kPexPjw1nsQIr4Bk1Hq93D4-tSGgklVjqYPmCSCPZpWLgoxbueHqVc1xDGaqoiqI6Ypo2Merkg46g7YdF9ZLpZNtuE38bALbgW3QPLGBzQKag3LEijJCk4S5kgeXGmK0iRVqP7E887VGYpOSb6jm5HHAehvcNJ39UK3XHcAZoQSqiZevQA935BmKWK0lSX1oJzOoaq1txJlZaWB5L6vePTM')",
        }}
      ></div>
      <div className="relative z-10 text-center text-white">
        <div className="mb-6 flex justify-center">
          <svg
            className="h-12 w-12 text-[#FFD700]"
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight">Vista Seu Orgulho</h1>
        <p className="text-lg opacity-80">
          Junte-se à família e tenha acesso exclusivo a roupas do time e muito mais.
        </p>
      </div>
    </div>
  );
}

export default AuthSideBanner;
