type WordmarkProps = {
  className?: string;
  title?: string;
  // Hex color for the accent letters (I and X). Defaults to currentColor.
  accent?: string;
};

// Calynix wordmark. C path + transparent-bg badge form the C·A logomark.
// All letters use `currentColor`; pass `accent` to tint the last two (I, X).
export default function Wordmark({ className, title = "Calynix", accent }: WordmarkProps) {
  const ix = accent ?? "currentColor";
  return (
    <svg
      viewBox="40 30 620 128"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* C */}
      <path
        transform="translate(40.00,144.00) scale(0.144,-0.144)"
        d="M589 542Q561 580 516.0 597.5Q471 615 428 615Q373 615 328.0 595.0Q283 575 250.5 540.0Q218 505 200.5 458.0Q183 411 183 356Q183 298 200.0 250.0Q217 202 248.5 167.5Q280 133 324.0 114.0Q368 95 423 95Q480 95 524.0 117.5Q568 140 595 177L696 106Q649 47 581.0 14.5Q513 -18 422 -18Q339 -18 269.5 9.5Q200 37 150.0 86.5Q100 136 72.0 204.5Q44 273 44 356Q44 441 73.5 509.5Q103 578 154.5 626.0Q206 674 276.0 700.0Q346 726 428 726Q462 726 499.0 719.5Q536 713 570.0 699.5Q604 686 634.0 666.0Q664 646 685 618Z"
        fill="currentColor"
      />
      {/* A badge — transparent-bg PNG sits inside the C opening */}
      <image x="141" y="37.50" width="111.06" height="111.06" href="/brand-badge.png" preserveAspectRatio="xMidYMid meet" />
      {/* L */}
      <path transform="translate(244.70,144.00) scale(0.144,-0.144)" d="M78 708H204V112H505V0H78Z" fill="currentColor" />
      {/* Y */}
      <path transform="translate(320.14,144.00) scale(0.144,-0.144)" d="M249 307 -17 708H137L315 410L495 708H641L375 307V0H249Z" fill="currentColor" />
      {/* N */}
      <path transform="translate(412.17,144.00) scale(0.144,-0.144)" d="M78 708H245L574 178H576V708H702V0H542L206 547H204V0H78Z" fill="currentColor" />
      {/* I */}
      <path transform="translate(524.62,144.00) scale(0.144,-0.144)" d="M78 708H204V0H78Z" fill={ix} />
      {/* X */}
      <path transform="translate(565.35,144.00) scale(0.144,-0.144)" d="M249 378 29 708H181L327 466L471 708H616L400 375L654 0H495L322 278L156 0H4Z" fill={ix} />
    </svg>
  );
}
