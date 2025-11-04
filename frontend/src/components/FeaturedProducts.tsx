import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const products = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8JDMMRI3Nu7efC57QpuY9UlfAKQKQy8Wqbyzi9cxTcyuLP0bREfX8_xJvhhtjuEZDZ3FuvmRv63-hQ4SUmmFIj8hiP5V9TXV63MLwK6UWUvdH7-dJ7okjiV3G0tKXNQNHHmS3TgV_j0oeRvVGIU0my-JcBkL2gHVwIC8qJaAeJBi5EhaY9J5q3oIuxFANiDVg6ttJ5nnLP0MK1ftZWZjd7RMfz0IYihkM5d9ohrwQLtLuYUK_44WFNPe6OzT5AUUh8KeCsd79VFs",
      title: "SAMBOLA Camisa Principal",
      price: "R$ 350,00",
      altText: "Camisa principal do SAMBOLA",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMccoEbMk5m_UWBKe6yIo6_UTHxddYaik5xpIbnyyv1j6TcNxscVsfuBQaIC4eM5IK1UOitlYS4CzQ0XHjmAYacLlrtY_AuYYnK2wsu1nntFeXhiRbe1s8tpg4cQ5dgXlDlC1y9KEm7qGSWB0yAUvfDjfQ-ToY-DxM3Nps6f4aYWgCMEbyiDcdgu5XkYGlsxX6ZkFrcvIVGn5y7MV53-YuGf74YY835gd6pArp8lCFev8Y-D1qyN7I0ONy4xtor0n3BrPeY4cd0lw",
      title: "Jaqueta de Treino Pro",
      price: "R$ 280,00",
      altText: "Jaqueta de treino azul escuro",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUzjC7eDvPKzEwYxUM4LJCu2QzWJVBtBVu7pGMJUUUL5bTsJvxKHehihxiTWD_xav6YxqRuRQw0diAYLY2aT0leti0ZpgMjHdoJJQtfn4XBF83TTai5m-LMeKIfNQC7TJDe9_YZ05BwmEddszkmXs9lzkJvMbwZvuCwT-9d8KT_NgkVP4mkMHyrecp6RpCUUIvdgnSxuXX2Tnh_Z0ozcPx_LzhFE6CyTEqVQznrfbfuB90KXiddpqoi_54Q-33DS07i-VYEGQ6-1w",
      title: "Cachecol do Time",
      price: "R$ 110,00",
      altText: "Cachecol do time com brasão do SAMBOLA",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmRl-uI5jew8R-fDG8moYoOW9BKyr-2jzZn2vqDQZaOEfjmTuNQEOGF-HjaXwr5E3uxkR77MXxdlho4baNaysfvVFCxi7GJoZ-Yahq2HunFoarrCIBiVjMPh48P4yCG0YEs5xvVaSl_JUL2pkDAOGdwoaU6niXmR4rfyWhlDU_4CJdF1MCse_eobewwbP7YAEByJkp3Fjk0q_84IDPKGMckU9Ys6KVVoMi2nXjTIixkrS0ZQK_al9OOC64Y2fyBIJzLNPAKwbCoaY",
      title: "Boné do Clube",
      price: "R$ 120,00",
      altText: "Boné preto do clube com logo dourado",
    },
  ];

  return (
    <section className="w-full py-12">
      <h2 className="text-[#111111] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5">
        Produtos em Destaque
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            altText={product.altText}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
