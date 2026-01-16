import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import EclipseCircle from "@/components/EclipseCircle";
import { storyArcs } from "@/data/characters";
import griffithImage from "@/assets/characters/griffith.png";

export default function Story() {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
        {/* Eclipse Circle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-50">
          <EclipseCircle size={400} />
        </div>

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <h1 className="font-display text-[4rem] md:text-[8rem] leading-none tracking-[0.2em] text-foreground text-shadow-blood">
            STORY
          </h1>
          <p className="text-xs tracking-widest text-primary mt-2 font-display">
            THE EPIC SAGA OF STRUGGLE AND SACRIFICE
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Character Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:sticky lg:top-24"
            >
              <img
                src={griffithImage}
                alt="Griffith - The White Hawk"
                className="h-[50vh] max-h-[500px] object-contain"
              />
            </motion.div>

            {/* Story Arcs Timeline */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="font-display text-2xl tracking-wider text-foreground mb-2">
                  THE ARCS
                </h2>
                <p className="text-sm text-muted-foreground">
                  Kentaro Miura's masterpiece spans over 40 volumes and continues to captivate 
                  readers with its dark fantasy epic. Follow the timeline of Guts' struggle.
                </p>
              </div>

              {storyArcs.map((arc, index) => (
                <motion.div
                  key={arc.id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-muted hover:border-primary transition-colors group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted group-hover:bg-primary transition-colors" />
                  
                  <div className="bg-card/30 backdrop-blur-sm border border-muted/30 p-4 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display text-lg tracking-wider text-foreground">
                          {arc.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">{arc.japaneseTitle}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 ${
                        arc.status === "completed" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-accent/20 text-accent"
                      }`}>
                        {arc.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                      <span>Volumes: {arc.volumes}</span>
                      <span>Chapters: {arc.chapters}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {arc.description}
                    </p>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-display">KEY EVENTS</p>
                      <ul className="space-y-1">
                        {arc.keyEvents.slice(0, 3).map((event, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
