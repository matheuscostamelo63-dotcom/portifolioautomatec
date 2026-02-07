import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface SocialActionsCarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

const SocialActionsCarousel: React.FC<SocialActionsCarouselProps> = ({ images, options }) => {
  const autoplayOptions = {
    delay: 4000, // 4 seconds delay
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = useCallback(() => {
    if (emblaApi && !hasInteracted) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        setHasInteracted(true);
      }
    }
  }, [emblaApi, hasInteracted]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("pointerDown", handleInteraction);
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("pointerDown", handleInteraction);
      }
    };
  }, [emblaApi, handleInteraction]);

  return (
    <div className="embla overflow-hidden rounded-lg border border-border shadow-xl" ref={emblaRef}>
      <div className="embla__container flex h-full cursor-pointer" onClick={handleInteraction}>
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