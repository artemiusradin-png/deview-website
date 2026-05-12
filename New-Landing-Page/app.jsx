// app.jsx — Compose the DEVIEW hero video scene.

function HeroVideo() {
  const DURATION = 8;
  return (
    <Stage
      width={1920}
      height={1080}
      duration={DURATION}
      background="#06050a"
      loop={true}
      autoplay={true}
      persistKey="deview-hero"
    >
      {/* Sky behind everything; not in the camera dolly so motion stays subtle */}
      <Sky/>
      <Stars/>

      {/* Everything in the scene that should parallax/drift slightly */}
      <CameraDolly duration={8}>
        <FarSkyline/>
        <AtmosphericHaze/>
        <MidSkyline/>
        <Harbour/>
      </CameraDolly>

      {/* Glow + atmosphere on top of scene */}
      <LensGlints/>

      {/* Brand reveal — the only text in the piece */}
      <BrandReveal/>

      {/* Final post-processing */}
      <Vignette/>
      <FilmGrain/>
    </Stage>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeroVideo/>);
