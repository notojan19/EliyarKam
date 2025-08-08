import { LampDemo } from "@/components/Lamp";
import CTA1 from "@/components/mvpblocks/cta-1";
import Feature1 from "@/components/mvpblocks/feature-1";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import MasonryGallery from "@/components/mvpblocks/masonry-grid-1";
import TextRevealLetters from "@/components/mvpblocks/text-reveal-1";

export default function Home() {
  return (
    <div>
      <LampDemo />
      <FeatureSteps />
      <CTA1 />
    </div>
  );
}
