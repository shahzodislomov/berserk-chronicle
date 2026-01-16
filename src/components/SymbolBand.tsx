import BrandOfSacrifice from "./BrandOfSacrifice";

export default function SymbolBand() {
  const symbols = Array(30).fill(null);

  return (
    <div className="symbol-band py-4 border-y border-muted/20">
      <div className="flex items-center animate-slide-band" style={{ width: "200%" }}>
        {symbols.map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-4 text-primary/80"
          >
            <BrandOfSacrifice size={32} />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {symbols.map((_, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center justify-center mx-4 text-primary/80"
          >
            <BrandOfSacrifice size={32} />
          </div>
        ))}
      </div>
    </div>
  );
}
