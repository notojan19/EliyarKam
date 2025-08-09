import { LampDemo } from "@/components/Lamp";
import { LoginForm } from "@/components/login-form";
import CTA1 from "@/components/mvpblocks/cta-1";
import Feature1 from "@/components/mvpblocks/feature-1";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";
import TextRevealLetters from "@/components/mvpblocks/text-reveal-1";
import TypewriterDemo from "@/components/mvpblocks/typewriter-demo";
import { ShuffleHero } from "@/components/shuffle-grid";
import { SpinningLogos } from "@/components/spinning-logos";

export default function Home() {
  return (
    <div>
      <ShuffleHero />
      <CTA1 />
    </div>
  );
}
