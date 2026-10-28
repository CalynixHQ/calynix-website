export const metadata = {
  title: "StreamLyn Support — Calynix",
  description: "Support for StreamLyn, the local Apple TV media player.",
};

export default function StreamLynSupport() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">StreamLyn Support</h1>

      <section className="mt-8 space-y-4 text-foreground/80">
        <h2 className="text-xl font-semibold">About StreamLyn</h2>
        <p>
          StreamLyn is a local Apple TV media player. It brings your own
          playlist or provider to the big screen; Calynix does not provide
          channels or media subscriptions.
        </p>
        <p>
          Your playlist URL and provider credentials stay on your Apple TV.
          Credentials are stored in the device Keychain and are used only to
          connect to the provider you configure.
        </p>

        <h2 className="text-xl font-semibold mt-8">Add a playlist or provider</h2>
        <p>
          Open StreamLyn on Apple TV, open Settings, choose Add Source, then
          select Playlist URL or Xtream provider. For a playlist, enter the
          complete URL supplied by your provider. For Xtream, enter the
          server address, username, and password exactly as provided. Select
          Save and wait for the channel list to finish loading.
        </p>

        <h2 className="text-xl font-semibold mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Playlist will not load:</strong> check the URL, confirm the
            provider is online, and make sure Apple TV has network access.
          </li>
          <li>
            <strong>Xtream login fails:</strong> re-enter the server address,
            username, and password; do not add extra spaces.
          </li>
          <li>
            <strong>Playback buffers:</strong> test another channel, restart
            Apple TV, and contact the provider if the stream itself is slow.
          </li>
          <li>
            <strong>Guide or artwork is missing:</strong> refresh the source;
            availability depends on what your provider publishes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Contact support</h2>
        <p>
          Email{" "}
          <a href="mailto:info@calynix.com" className="underline font-medium">
            info@calynix.com
          </a>{" "}
          with the issue, Apple TV model, tvOS version, and steps to reproduce.
          Please do not send passwords or full credential details.
        </p>
        <p>
          For privacy questions, see our{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <h2 className="text-xl font-semibold mt-8">Company</h2>
        <p>
          Calynix Ltd
          <br />
          71-75 Shelton Street
          <br />
          Covent Garden
          <br />
          London, WC2H 9JQ
          <br />
          United Kingdom
        </p>
      </section>
    </article>
    </div>
  );
}
