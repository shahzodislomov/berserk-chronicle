import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Sword, Shield, Zap, Brain, Heart, Quote } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"info" | "stats" | "quotes">("info");

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

  const StatBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) => (
    <div className="flex items-center gap-3">
      <Icon size={14} className="text-primary" />
      <span className="text-xs text-muted-foreground w-20">{label}</span>
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      <span className="text-xs text-foreground w-8">{value}</span>
    </div>
  );

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
        {/* Eclipse Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-0">
          <EclipseCircle size={450} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4 lg:px-8 gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="carousel-arrow fixed left-4 top-1/2 -translate-y-1/2 lg:relative lg:left-0 lg:top-0 lg:translate-y-0"
            aria-label="Previous character"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Character Display */}
          <div className="flex flex-col items-center">
            {/* Character Image */}
            <div className="relative h-[45vh] lg:h-[55vh] w-full max-w-sm flex items-center justify-center">
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
                  className="h-full max-h-[500px] object-contain object-bottom glow-red"
                />
              </AnimatePresence>
            </div>

            {/* Character Name & Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCharacter.id}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <h2 className="font-display text-5xl lg:text-7xl tracking-[0.15em] text-foreground text-shadow-blood mb-1">
                  {currentCharacter.name}
                </h2>
                <p className="text-sm tracking-widest text-primary font-display mb-2">
                  {currentCharacter.title}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {currentCharacter.alias.map((alias, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 border border-muted-foreground/30 text-muted-foreground">
                      {alias}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Character Indicators */}
            <div className="flex gap-2 mt-4">
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
            className="carousel-arrow fixed right-4 top-1/2 -translate-y-1/2 lg:relative lg:right-0 lg:top-0 lg:translate-y-0"
            aria-label="Next character"
          >
            <ChevronRight size={24} />
          </button>

          {/* Character Details Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCharacter.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-96 bg-card/50 backdrop-blur-sm border border-muted/30 p-6"
            >
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-muted/30">
                {(["info", "stats", "quotes"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-xs font-display tracking-widest uppercase transition-colors ${
                      activeTab === tab 
                        ? "text-primary border-b-2 border-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "info" && (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-primary mb-1 font-display">STATUS</p>
                    <p className="text-sm text-foreground">{currentCharacter.status}</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary mb-1 font-display">AFFILIATION</p>
                    <p className="text-sm text-muted-foreground">{currentCharacter.affiliation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary mb-1 font-display">WEAPON</p>
                    <p className="text-sm text-muted-foreground">{currentCharacter.weapon}</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary mb-1 font-display">ABILITIES</p>
                    <div className="flex flex-wrap gap-1">
                      {currentCharacter.abilities.map((ability, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground">
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-primary mb-1 font-display">FIRST APPEARANCE</p>
                    <p className="text-sm text-muted-foreground">{currentCharacter.firstAppearance}</p>
                  </div>
                </div>
              )}

              {activeTab === "stats" && (
                <div className="space-y-3">
                  <StatBar label="Strength" value={currentCharacter.stats.strength} icon={Sword} />
                  <StatBar label="Speed" value={currentCharacter.stats.speed} icon={Zap} />
                  <StatBar label="Endurance" value={currentCharacter.stats.endurance} icon={Shield} />
                  <StatBar label="Skill" value={currentCharacter.stats.skill} icon={Heart} />
                  <StatBar label="Intelligence" value={currentCharacter.stats.intelligence} icon={Brain} />
                  <div className="pt-4 border-t border-muted/30">
                    <p className="text-xs text-primary mb-2 font-display">RELATIONSHIPS</p>
                    <div className="space-y-1">
                      {currentCharacter.relationships.map((rel, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{rel.name}</span>
                          <span className="text-foreground">{rel.relation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "quotes" && (
                <div className="space-y-4">
                  {currentCharacter.quotes.map((quote, i) => (
                    <div key={i} className="flex gap-2">
                      <Quote size={14} className="text-primary shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground italic">"{quote}"</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-muted/30">
                    <p className="text-xs text-primary mb-2 font-display">VOICE ACTORS</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Japanese</span>
                        <span className="text-foreground">{currentCharacter.voiceActor.japanese}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">English</span>
                        <span className="text-foreground">{currentCharacter.voiceActor.english}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side Character Names */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <p className="font-display text-sm tracking-widest text-muted-foreground/50 -rotate-90 origin-center whitespace-nowrap">
            {characters[(currentIndex - 1 + characters.length) % characters.length].name}
          </p>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <p className="font-display text-sm tracking-widest text-muted-foreground/50 rotate-90 origin-center whitespace-nowrap">
            {characters[(currentIndex + 1) % characters.length].name}
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
