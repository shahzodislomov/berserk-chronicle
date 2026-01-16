import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import griffithImage from "@/assets/characters/griffith.png";

export default function Story() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Eclipse Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <EclipseCircle size={450} />
        </div>

        {/* Character */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <img
            src={griffithImage}
            alt="Griffith - The White Hawk"
            className="h-[60vh] max-h-[600px] object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center"
        >
          <h1 className="font-display text-[6rem] md:text-[10rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
            STORY
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-2xl text-center px-8 z-20"
        >
          <p className="text-xs tracking-widest text-primary mb-4 font-display">
            THE GOLDEN AGE ARC
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The story follows Guts, a lone mercenary, and Griffith, the leader of a mercenary band 
            called the Band of the Hawk. Their fates become intertwined as Guts joins the band, 
            setting in motion events that will shape the very fabric of the world.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
