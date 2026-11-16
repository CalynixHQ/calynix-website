export const metadata = {
  title: "BATTLYN - App Review demo",
  robots: { index: false, follow: false },
};

export default function BattlynReviewDemo() {
  return (
    <div className="container-page py-16">
      <h1 className="text-2xl font-bold tracking-tight">
        BATTLYN - App Review demo
      </h1>
      <video
        controls
        playsInline
        preload="metadata"
        className="mt-6 w-full"
        style={{ maxWidth: 1100 }}
      >
        <source src="/battlyn/review-demo.mp4" type="video/mp4" />
      </video>
      <p className="mt-4 text-sm text-foreground/70">
        Screen recording of BATTLYN 1.0 on iPhone: launch, claim, battle,
        Credits and purchases, Licences.
      </p>
    </div>
  );
}
