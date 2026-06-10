import Wordmark from "./Wordmark";

type AppsWordmarkProps = {
  className?: string;
};

// Calynix Apps wordmark — same mark as the main wordmark, I+X in brand teal.
export default function AppsWordmark({ className }: AppsWordmarkProps) {
  return <Wordmark className={className} title="Calynix Apps" accent="#14B8A6" />;
}
