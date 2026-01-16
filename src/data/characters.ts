import gutsImage from "@/assets/characters/guts.png";
import griffithImage from "@/assets/characters/griffith.png";
import cascaImage from "@/assets/characters/casca.png";
import skullKnightImage from "@/assets/characters/skull-knight.png";
import farneseImage from "@/assets/characters/farnese.png";
import serpicoImage from "@/assets/characters/serpico.png";

export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const characters: Character[] = [
  {
    id: "guts",
    name: "GUTS",
    title: "The Black Swordsman",
    description:
      "A former mercenary and branded wanderer, Guts wields the massive Dragon Slayer sword. Driven by vengeance and haunted by demons, he walks the path of blood and steel alone.",
    image: gutsImage,
    color: "hsl(0, 0%, 20%)",
  },
  {
    id: "griffith",
    name: "GRIFFITH",
    title: "The White Hawk",
    description:
      "Once the charismatic leader of the Band of the Hawk, Griffith's ambition knew no bounds. His dream of ruling his own kingdom led him to make the ultimate sacrifice.",
    image: griffithImage,
    color: "hsl(220, 30%, 90%)",
  },
  {
    id: "casca",
    name: "CASCA",
    title: "Commander of the Hawks",
    description:
      "A skilled warrior and the only female member of the Band of the Hawk's raiders. Her devotion to Griffith was absolute, until fate tore everything apart.",
    image: cascaImage,
    color: "hsl(30, 50%, 40%)",
  },
  {
    id: "skull-knight",
    name: "SKULL KNIGHT",
    title: "The Undying",
    description:
      "An enigmatic warrior who has fought against the God Hand for over a thousand years. His origins remain shrouded in mystery, but his power is undeniable.",
    image: skullKnightImage,
    color: "hsl(220, 50%, 50%)",
  },
  {
    id: "farnese",
    name: "FARNESE",
    title: "Noble of the Holy See",
    description:
      "Once a commander of the Holy Iron Chain Knights, Farnese abandoned her fanatical faith to follow Guts, seeking true meaning in a world of darkness.",
    image: farneseImage,
    color: "hsl(45, 70%, 60%)",
  },
  {
    id: "serpico",
    name: "SERPICO",
    title: "The Wind Knight",
    description:
      "A calm and calculating swordsman devoted to protecting Farnese. His exceptional speed and cunning make him one of the most dangerous fighters alive.",
    image: serpicoImage,
    color: "hsl(120, 40%, 35%)",
  },
];
