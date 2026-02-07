import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface SocialActionsCarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

const SocialActionsCarousel: React.FC<SocialActionsCarouselProps> = ({ images, options }) => {
  const autoplayOptions = {
    delay: 3000, // 3 seconds delay (reduced from 4000)
    stopOnInteraction: false, // Removed stop on interaction
    stopOnMouseEnter: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div className="embla overflow-hidden rounded-lg border border-border shadow-xl" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {images.map((image, index) => (
          <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0 h-full" key={index}>
            <img
              src={image}
              alt={`Ação Solidária ${index + 1}`}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialActionsCarousel;