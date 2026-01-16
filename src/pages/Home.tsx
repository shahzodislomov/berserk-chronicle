import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import SymbolBand from "@/components/SymbolBand";
import gutsImage from "@/assets/characters/guts.png";
import { characters, storyArcs, loreEntries } from "@/data/characters";
import { Sword, BookOpen, Users, Scroll } from "lucide-react";

export default function Home() {
  const featuredCharacters = characters.slice(0, 3);

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center relative min-h-screen">
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
              className="h-[65vh] max-h-[650px] object-contain object-bottom glow-red"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center"
          >
            <h1 className="font-display text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
              BERSERK
            </h1>
          </motion.div>

          {/* Left Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute left-8 bottom-40 max-w-xs z-20 hidden md:block"
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
            className="absolute right-8 bottom-40 z-20"
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

          {/* Symbol Band */}
          <div className="absolute bottom-1/3 left-0 right-0 z-10">
            <SymbolBand />
          </div>
        </div>

        {/* Quick Stats Section */}
        <section className="relative z-10 py-16 px-8 bg-gradient-to-b from-transparent to-card/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Users, label: "Characters", value: `${characters.length}+`, link: "/characters" },
                { icon: BookOpen, label: "Story Arcs", value: `${storyArcs.length}`, link: "/story" },
                { icon: Scroll, label: "Lore Entries", value: `${loreEntries.length}+`, link: "/lore" },
                { icon: Sword, label: "Years of Epic", value: "35+", link: "/gallery" },
              ].map((stat, index) => (
                <Link
                  key={index}
                  to={stat.link}
                  className="group text-center p-6 border border-muted/30 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-all"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-display text-3xl text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">
                    {stat.label}
                  </p>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Characters Preview */}
        <section className="relative z-10 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl tracking-wider text-foreground">
                FEATURED CHARACTERS
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                The warriors who shape the world of Berserk
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCharacters.map((char, index) => (
                <motion.div
                  key={char.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/characters?selected=${char.id}`}
                    className="group block relative aspect-[3/4] overflow-hidden border border-muted/30 bg-card/20"
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
                        {char.name}
                      </h3>
                      <p className="text-xs tracking-widest text-primary">{char.title}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link to="/characters" className="btn-eclipse">
                VIEW ALL CHARACTERS
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative z-10 py-20 px-8 border-y border-muted/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-display text-2xl md:text-3xl tracking-wide text-foreground italic leading-relaxed">
              "In this world, is the destiny of mankind controlled by some transcendental 
              entity or law? Is it like the hand of God hovering above? At least it is true 
              that man has no control, even over his own will."
            </p>
            <p className="text-sm text-primary mt-6 font-display tracking-widest">
              — VOID, THE GOD HAND
            </p>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
