import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { characters } from "@/data/characters";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? characters.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === characters.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-16 px-8 overflow-hidden">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-[4rem] md:text-[6rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
            GALLERY
          </h1>
          <p className="text-sm tracking-widest text-primary mt-4 font-display">
            THE BAND OF THE HAWK & BEYOND
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[3/4] overflow-hidden bg-muted/10 border border-muted/20 cursor-pointer"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {character.name}
                </h3>
                <p className="text-xs tracking-widest text-primary">
                  {character.title}
                </p>
                <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {character.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Characters", value: characters.length },
            { label: "Arcs", value: "5" },
            { label: "Volumes", value: "41+" },
            { label: "Years Running", value: "35+" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border border-muted/30 bg-card/30 backdrop-blur-sm">
              <p className="font-display text-3xl md:text-4xl text-primary">{stat.value}</p>
              <p className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-8 right-8 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 md:left-8 p-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Content */}
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto px-16"
              >
                <img
                  src={characters[selectedIndex].image}
                  alt={characters[selectedIndex].name}
                  className="h-[50vh] md:h-[70vh] object-contain"
                />

                <div className="text-center md:text-left max-w-md">
                  <h2 className="font-display text-5xl md:text-6xl tracking-wider text-foreground text-shadow-blood mb-2">
                    {characters[selectedIndex].name}
                  </h2>
                  <p className="text-sm tracking-widest text-primary font-display mb-4">
                    {characters[selectedIndex].title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {characters[selectedIndex].fullBio.slice(0, 300)}...
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {characters[selectedIndex].abilities.slice(0, 3).map((ability, i) => (
                      <span key={i} className="text-xs px-3 py-1 border border-primary/50 text-primary">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {characters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
