import Banner from "@/components/Banner";
import FeaturesPets from "@/components/FeaturesPets";
import PetCareTips from "@/components/PetCareTips";
import WhyAdoptSection from "@/components/WhyAdoptSection";


export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturesPets/>
      <WhyAdoptSection/>
      <PetCareTips/>
    </div>
  );
}
