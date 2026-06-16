type NameParts = {
  prefix: string;
  suffix: string;
  color: string;
};

type Props = {
  name: string;
  nameParts?: NameParts;
  className?: string;
  arrow?: boolean;
};

export default function AppTitle({ name, nameParts, className = "", arrow }: Props) {
  const base = `text-xl font-bold tracking-tight font-mono ${className}`;

  if (!nameParts) {
    return (
      <h2 className={`text-xl font-semibold ${className}`}>
        {name}{arrow && " →"}
      </h2>
    );
  }

  return (
    <h2 className={base}>
      <span style={{ color: nameParts.color }}>{nameParts.prefix}</span>
      <span style={{ color: "#FFFFFF" }}>{nameParts.suffix}</span>
      {arrow && <span className="text-foreground/40 font-normal"> →</span>}
    </h2>
  );
}
