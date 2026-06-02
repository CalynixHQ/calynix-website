type GamesWordmarkProps = {
  className?: string;
  title?: string;
};

// "GAMES" set in the same typeface (Avenir Next Demi Bold, outlined) and at the
// same scale/baseline as the Calynix Wordmark, with the brand triangle standing
// in for the "A" — matching how the Calynix wordmark uses the triangle. Letters
// use `currentColor` so it adapts to light/dark; the triangle keeps the brand
// accent sides (blue / light-blue) like the main mark.
export default function GamesWordmark({
  className,
  title = "Games",
}: GamesWordmarkProps) {
  return (
    <svg
      viewBox="0 0 480 200"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* G */}
      <path
        transform="translate(40,144) scale(0.12,-0.12)"
        d="M698 37Q644 11 579.5 -3.5Q515 -18 431 -18Q345 -18 274.0 9.5Q203 37 152.0 86.5Q101 136 72.5 204.5Q44 273 44 356Q44 441 73.5 509.5Q103 578 154.5 626.0Q206 674 276.0 700.0Q346 726 428 726Q513 726 583.5 701.5Q654 677 697 637L610 543Q583 573 534.5 594.0Q486 615 429 615Q373 615 327.5 595.0Q282 575 250.0 540.0Q218 505 200.5 458.0Q183 411 183 356Q183 299 200.5 251.5Q218 204 250.5 169.0Q283 134 329.5 114.5Q376 95 435 95Q516 95 576 120V300H427V404H698Z"
        fill="currentColor"
      />
      {/* A — brand triangle */}
      <path d="M185.24,36.04 L136.35,152.50 L161.93,135.50 L185.24,79.96 Z" fill="#3B7BFF" />
      <path d="M185.24,36.04 L234.13,152.50 L208.55,135.50 L185.24,79.96 Z" fill="currentColor" />
      <path d="M136.35,152.50 L234.13,152.50 L208.55,135.50 L161.93,135.50 Z" fill="#7FB0FF" />
      {/* M */}
      <path
        transform="translate(217.48,144) scale(0.12,-0.12)"
        d="M78 708H275L459 205H462L644 708H842V0H717V569H715L500 0H412L200 569H198V0H78Z"
        fill="currentColor"
      />
      {/* E */}
      <path
        transform="translate(327.88,144) scale(0.12,-0.12)"
        d="M78 708H547V598H204V418H529V312H204V112H565V0H78Z"
        fill="currentColor"
      />
      {/* S */}
      <path
        transform="translate(401.08,144) scale(0.12,-0.12)"
        d="M439 560Q419 586 382.5 603.5Q346 621 309 621Q287 621 265.0 615.5Q243 610 225.0 598.5Q207 587 195.5 568.5Q184 550 184 524Q184 500 194.0 483.0Q204 466 221.5 454.0Q239 442 264.0 433.0Q289 424 319 415Q353 404 389.5 390.0Q426 376 456.5 353.0Q487 330 506.5 295.0Q526 260 526 208Q526 151 505.0 108.5Q484 66 449.0 38.0Q414 10 367.0 -4.0Q320 -18 268 -18Q199 -18 133.0 7.5Q67 33 25 83L115 167Q141 131 184.5 110.0Q228 89 270 89Q292 89 315.0 94.5Q338 100 356.5 113.0Q375 126 386.5 145.5Q398 165 398 194Q398 222 385.0 240.5Q372 259 350.0 272.5Q328 286 298.0 296.0Q268 306 235 317Q203 327 171.0 341.0Q139 355 113.5 378.0Q88 401 72.0 434.5Q56 468 56 518Q56 572 78.5 611.0Q101 650 137.5 675.5Q174 701 220.5 713.5Q267 726 315 726Q369 726 424.5 707.0Q480 688 521 650Z"
        fill="currentColor"
      />
    </svg>
  );
}
