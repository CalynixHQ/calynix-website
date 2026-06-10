type WordmarkProps = {
  className?: string;
  title?: string;
};

export default function Wordmark({ className, title = "Calynix" }: WordmarkProps) {
  return (
    <svg
      viewBox="40 36 538 108"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* C */}
      <path transform="translate(40.00,144.00) scale(0.12,-0.12)" d="M589 542Q561 580 516.0 597.5Q471 615 428 615Q373 615 328.0 595.0Q283 575 250.5 540.0Q218 505 200.5 458.0Q183 411 183 356Q183 298 200.0 250.0Q217 202 248.5 167.5Q280 133 324.0 114.0Q368 95 423 95Q480 95 524.0 117.5Q568 140 595 177L696 106Q649 47 581.0 14.5Q513 -18 422 -18Q339 -18 269.5 9.5Q200 37 150.0 86.5Q100 136 72.0 204.5Q44 273 44 356Q44 441 73.5 509.5Q103 578 154.5 626.0Q206 674 276.0 700.0Q346 726 428 726Q462 726 499.0 719.5Q536 713 570.0 699.5Q604 686 634.0 666.0Q664 646 685 618Z" fill="currentColor" />
      {/* A — pixel-traced from brand/logo/A.png */}
      <path d="M183.12,40.73 L164.33,44.67 L139.48,119.64 L158.85,115.09 Z" fill="#3B7BFF" />
      <path d="M187.20,47.85 L201.67,145.23 L220.92,148.87 Z" fill="currentColor" />
      <path d="M164.22,42.55 L183.23,42.55 L195.95,147.05 L129.79,147.05 Z" fill="#1A3578" />
      {/* L */}
      <path transform="translate(228.00,144.00) scale(0.12,-0.12)" d="M78 708H204V112H505V0H78Z" fill="currentColor" />
      {/* Y */}
      <path transform="translate(291.32,144.00) scale(0.12,-0.12)" d="M249 307 -17 708H137L315 410L495 708H641L375 307V0H249Z" fill="currentColor" />
      {/* N */}
      <path transform="translate(367.96,144.00) scale(0.12,-0.12)" d="M78 708H245L574 178H576V708H702V0H542L206 547H204V0H78Z" fill="currentColor" />
      {/* I */}
      <path transform="translate(463.56,144.00) scale(0.12,-0.12)" d="M78 708H204V0H78Z" fill="currentColor" />
      {/* X */}
      <path transform="translate(499.40,144.00) scale(0.12,-0.12)" d="M249 378 29 708H181L327 466L471 708H616L400 375L654 0H495L322 278L156 0H4Z" fill="currentColor" />
    </svg>
  );
}
