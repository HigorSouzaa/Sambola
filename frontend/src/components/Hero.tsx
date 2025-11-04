interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  backgroundImage: string;
  altText?: string;
}

function Hero({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  backgroundImage,
  altText = "Hero background" 
}: HeroProps) {
  return (
    <div className="w-full @container">
      <div className="">
        
        {/* Container principal com fundo */}
        <div
          className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-12 h-[100px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url("${backgroundImage}")`,
          }}
          data-alt={altText}
        >
          {/* Texto */}
          <div className="flex flex-col gap-2 text-left max-w-xl">
            
            {/* Título */}
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              {title}
            </h1>
            
            {/* Subtítulo */}
            <h2 className="text-gray-200 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
              {subtitle}
            </h2>
          </div>

          {/* Botão */}
          <button
            onClick={onButtonClick}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-amber-200 text-[#11111] text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
