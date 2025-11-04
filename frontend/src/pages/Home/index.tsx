import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
import CategoryCallouts from "../../components/CategoryCallouts";
import BrandStory from "../../components/BrandStory";
import Footer from "../../components/Footer";

function Home() {
  const handleShopClick = () => {
    console.log("Ir para loja");
    // Aqui você pode adicionar lógica de navegação
  };
  return (
    <div className="w-[90%]">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero
          title="Venha fazer parte da nossa Historia"
          subtitle="Compre a coleção oficial do sambola. O Kit 2024 está aqui."
          buttonText="Comprar o Novo Kit"
          onButtonClick={handleShopClick}
          backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDaK6qodZYHHVqJbO60lQEkHgJlFeRB2BFWUnMKqOlDNUjAaXToxdBOzvO_5Bb4j43B4Mepv86SCGIiGJ9b6443Md_VSqqXKB4CW7FSAByfLxv93fOJb8DRTBGaR5kLaJ1ZiAIeqGBFRbaSv7UtqsLwmFCgGyfRfruC87qtu7xSr-WjoaxLS4kmFutWhxerEbe-NDp-Z_nuJuJ9nNWj-sKMc1Vv5i_JVicnwkzSxhfTV7Uq3_p-NeK0GbngsJ5vXIbZIUlzFIhxHaE"
          altText="Um jogador de futebol comemorando um gol em um estádio lotado"
        />
        <FeaturedProducts />
        <CategoryCallouts />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
