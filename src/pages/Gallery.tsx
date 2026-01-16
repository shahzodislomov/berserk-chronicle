import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { characters } from "@/data/characters";

export default function Gallery() {
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
            THE BAND OF THE HAWK
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-muted/10 border border-muted/20"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl tracking-wider text-foreground">
                  {character.name}
                </h3>
                <p className="text-xs tracking-widest text-primary">
                  {character.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
