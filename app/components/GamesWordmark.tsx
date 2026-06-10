import Wordmark from "./Wordmark";

type GamesWordmarkProps = {
  className?: string;
};

// Calynix Games wordmark — same mark as the main wordmark, I+X in brand blue.
export default function GamesWordmark({ className }: GamesWordmarkProps) {
  return <Wordmark className={className} title="Calynix Games" accent="#1E50C8" />;
}
