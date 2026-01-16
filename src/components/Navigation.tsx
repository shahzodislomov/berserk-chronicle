import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "@/data/characters";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Characters", path: "/characters" },
  { name: "Story", path: "/story" },
  { name: "Lore", path: "/lore" },
  { name: "Gallery", path: "/gallery" },
];

interface NavigationProps {
  onCharacterSelect?: (characterId: string) => void;
}

export default function Navigation({ onCharacterSelect }: NavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCharacterClick = (characterId: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    if (onCharacterSelect) {
      onCharacterSelect(characterId);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl tracking-widest text-foreground">
            BERSERK
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="search-overlay flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close search"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-2xl px-8"
            >
              <input
                type="text"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-b-2 border-muted-foreground/30 focus:border-primary
                         text-4xl font-display tracking-wider text-foreground placeholder:text-muted-foreground/50
                         outline-none py-4 transition-colors"
              />

              {/* Search Results */}
              <div className="mt-8 space-y-4">
                {searchQuery && filteredCharacters.length > 0 && (
                  <>
                    {filteredCharacters.map((char, index) => (
                      <motion.div
                        key={char.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={`/characters?selected=${char.id}`}
                          onClick={() => handleCharacterClick(char.id)}
                          className="flex items-center gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors group"
                        >
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-16 h-16 object-cover object-top rounded-lg"
                          />
                          <div>
                            <h3 className="font-display text-xl tracking-wider text-foreground group-hover:text-primary transition-colors">
                              {char.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{char.title}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </>
                )}

                {searchQuery && filteredCharacters.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No characters found matching "{searchQuery}"
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
