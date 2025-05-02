"use client";

import * as React from "react";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/images/about-image.jpg",
  "/images/hero-background.jpg",
];

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full"> 
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
