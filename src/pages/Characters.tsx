import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import { characters } from "@/data/characters";

export default function Characters() {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selected");
  
  const initialIndex = selectedId 
    ? characters.findIndex(c => c.id === selectedId) 
    : 0;
  
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (selectedId) {
      const index = characters.findIndex(c => c.id === selectedId);
      if (index >= 0 && index !== currentIndex) {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
      }
    }
  }, [selectedId]);

  const currentCharacter = characters[currentIndex];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
  };

  const characterVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        duration: 0.5,
      },
    }),
  };

  const infoVariants: Variants = {
    enter: { y: 20, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4 }
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Eclipse Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <EclipseCircle size={500} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="carousel-arrow absolute left-4 md:left-8"
            aria-label="Previous character"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Character Display */}
          <div className="flex flex-col items-center">
            {/* Character Image */}
            <div className="relative h-[60vh] w-full max-w-md flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentCharacter.id}
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                  custom={direction}
                  variants={characterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="h-full max-h-[600px] object-contain object-bottom glow-red"
                />
              </AnimatePresence>
            </div>

            {/* Character Info */}
            <div className="text-center mt-8 max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCharacter.id}
                  variants={infoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h2 className="font-display text-6xl md:text-8xl tracking-[0.15em] text-foreground text-shadow-blood mb-2">
                    {currentCharacter.name}
                  </h2>
                  <p className="text-sm tracking-widest text-primary mb-4 font-display">
                    {currentCharacter.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                    {currentCharacter.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Character Indicators */}
            <div className="flex gap-2 mt-8">
              {characters.map((char, index) => (
                <button
                  key={char.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Select ${char.name}`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="carousel-arrow absolute right-4 md:right-8"
            aria-label="Next character"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Side Character Names */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="font-display text-sm tracking-widest text-muted-foreground/50 -rotate-90 origin-center whitespace-nowrap">
            {characters[(currentIndex - 1 + characters.length) % characters.length].name}
          </p>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="font-display text-sm tracking-widest text-muted-foreground/50 rotate-90 origin-center whitespace-nowrap">
            {characters[(currentIndex + 1) % characters.length].name}
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
