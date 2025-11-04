import Header from "../../components/Header";
import Hero from "./Hero";

function Home() {
  const handleShopClick = () => {
    console.log("Ir para loja");
    // Aqui você pode adicionar lógica de navegação
  };
  return (
    <div className="w-[95%]">
      <Header />
      <Hero
        title="Venha fazer parte da nossa Historia"
        subtitle="Compre a coleção oficial do sambola. O Kit 2024 está aqui."
        buttonText="Comprar o Novo Kit"
        onButtonClick={handleShopClick}
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDaK6qodZYHHVqJbO60lQEkHgJlFeRB2BFWUnMKqOlDNUjAaXToxdBOzvO_5Bb4j43B4Mepv86SCGIiGJ9b6443Md_VSqqXKB4CW7FSAByfLxv93fOJb8DRTBGaR5kLaJ1ZiAIeqGBFRbaSv7UtqsLwmFCgGyfRfruC87qtu7xSr-WjoaxLS4kmFutWhxerEbe-NDp-Z_nuJuJ9nNWj-sKMc1Vv5i_JVicnwkzSxhfTV7Uq3_p-NeK0GbngsJ5vXIbZIUlzFIhxHaE"
        altText="Um jogador de futebol comemorando um gol em um estádio lotado"
      />
    </div>
  );
}

export default Home;
