import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import FeaturesPets from "@/components/FeaturesPets";
import HowItWorks from "@/components/HowItWork";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccesStory";
import WhyAdoptSection from "@/components/WhyAdoptSection";


export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturesPets/>
      <WhyAdoptSection/>
      <HowItWorks/>
      <SuccessStories/>
      <PetCareTips/>
      <FAQ/>
    </div>
  );
}
