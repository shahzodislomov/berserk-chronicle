import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import { loreEntries } from "@/data/characters";
import skullKnightImage from "@/assets/characters/skull-knight.png";
import { Book, Skull, Gem, Flame } from "lucide-react";

const categoryIcons = {
  world: Book,
  beings: Skull,
  artifacts: Gem,
  events: Flame,
};

const categoryColors = {
  world: "text-blue-400",
  beings: "text-purple-400",
  artifacts: "text-amber-400",
  events: "text-red-400",
};

export default function Lore() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const categories = ["world", "beings", "artifacts", "events"] as const;

  const filteredEntries = activeCategory
    ? loreEntries.filter(e => e.category === activeCategory)
    : loreEntries;

  const activeEntry = selectedEntry 
    ? loreEntries.find(e => e.id === selectedEntry)
    : null;

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
        {/* Eclipse Circle */}
        <div className="absolute top-1/3 right-0 translate-x-1/2 -translate-y-1/2 z-0 opacity-40">
          <EclipseCircle size={500} />
        </div>

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <h1 className="font-display text-[4rem] md:text-[8rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
            LORE
          </h1>
          <p className="text-xs tracking-widest text-primary mt-2 font-display">
            THE DARK MYTHOLOGY OF THE BERSERK WORLD
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Character Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-start"
            >
              <img
                src={skullKnightImage}
                alt="Skull Knight"
                className="h-[50vh] max-h-[500px] object-contain sticky top-24"
              />
            </motion.div>

            {/* Lore Grid */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-display tracking-widest uppercase border transition-all ${
                    activeCategory === null
                      ? "border-primary text-primary bg-primary/10"
                      : "border-muted text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  ALL
                </button>
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat];
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center gap-2 px-4 py-2 text-xs font-display tracking-widest uppercase border transition-all ${
                        activeCategory === cat
                          ? "border-primary text-primary bg-primary/10"
                          : "border-muted text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon size={14} className={categoryColors[cat]} />
                      {cat}
                    </button>
                  );
                })}
              </motion.div>

              {/* Lore Entries */}
              <div className="grid md:grid-cols-2 gap-4">
                {filteredEntries.map((entry, index) => {
                  const Icon = categoryIcons[entry.category];
                  return (
                    <motion.div
                      key={entry.id}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      onClick={() => setSelectedEntry(entry.id)}
                      className="bg-card/30 backdrop-blur-sm border border-muted/30 p-5 cursor-pointer
                               hover:border-primary/50 hover:bg-card/50 transition-all group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 bg-muted/50 ${categoryColors[entry.category]}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-display text-lg tracking-wider text-foreground group-hover:text-primary transition-colors">
                            {entry.title}
                          </h3>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">
                            {entry.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {entry.description}
                      </p>
                      <p className="text-xs text-primary mt-3 font-display tracking-wider">
                        CLICK TO READ MORE →
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {activeEntry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
              onClick={() => setSelectedEntry(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-card border border-muted/50 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-muted/50 ${categoryColors[activeEntry.category]}`}>
                    {(() => {
                      const Icon = categoryIcons[activeEntry.category];
                      return <Icon size={24} />;
                    })()}
                  </div>
                  <div>
                    <h2 className="font-display text-3xl tracking-wider text-foreground">
                      {activeEntry.title}
                    </h2>
                    <p className="text-xs text-primary uppercase tracking-widest mt-1">
                      {activeEntry.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-foreground">
                    {activeEntry.description}
                  </p>
                  <div className="border-t border-muted/30 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {activeEntry.details}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEntry(null)}
                  className="mt-8 btn-eclipse"
                >
                  CLOSE
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
