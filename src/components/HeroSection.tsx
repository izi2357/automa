
import VideoSection from "./VideoSection";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
      <VideoSection />
      <RegistrationForm />
    </div>
  );
};

export default HeroSection;
