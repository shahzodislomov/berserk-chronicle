import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import SymbolBand from "@/components/SymbolBand";
import gutsImage from "@/assets/characters/guts.png";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Eclipse Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <EclipseCircle size={550} />
          </div>

          {/* Character */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <img
              src={gutsImage}
              alt="Guts - The Black Swordsman"
              className="h-[70vh] max-h-[700px] object-contain object-bottom glow-red"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center"
          >
            <h1 className="font-display text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
              BERSERK
            </h1>
          </motion.div>

          {/* Left Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute left-8 bottom-32 max-w-xs z-20"
          >
            <p className="text-xs tracking-widest text-primary mb-2 font-display">
              THE LEGENDARY DARK FANTASY
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In a world where humanity clings to survival against monstrous apostles and 
              the God Hand, one man walks the path of vengeance. His name is Guts, 
              the Black Swordsman.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute right-8 bottom-32 z-20"
          >
            <Link to="/characters" className="btn-eclipse inline-flex items-center gap-2">
              ENTER THE ECLIPSE
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L8 3M13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Symbol Band */}
        <div className="absolute bottom-1/3 left-0 right-0 z-10">
          <SymbolBand />
        </div>
      </div>
    </PageTransition>
  );
}
