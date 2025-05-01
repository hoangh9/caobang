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
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden border-4 border-red-500"> {/* Added border for debugging section */} 
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent> {/* Removed h-full temporarily */}
          {images.map((src, index) => (
            <CarouselItem key={index} className="bg-blue-500"> {/* Removed h-full, added bg-blue-500 for debugging item */}
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
      </Carousel>
    </section>
  );
};

export default HeroSection;
