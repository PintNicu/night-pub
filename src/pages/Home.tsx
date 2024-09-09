import ImageSlider from "../components/ImageSlider/ImageSlider";
import CompanyMessageBar from "../components/TextSection/CompanyMessageBar";
import WelcomeComponent from "../components/WelcomeComponent/WelcomeComponent";
import DeliveryComponent from "../components/DeliveryComponent/DeliveryComponent";
import SocialFollowComponent from "../components/SocialFollowComponent/SocialFollowComponent";

function Home() {
  return (
    <div>
      <ImageSlider />

      <CompanyMessageBar />

      <WelcomeComponent />

      <DeliveryComponent />

      <SocialFollowComponent />
    </div>
  );
}

export default Home;
