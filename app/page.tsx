import FaQs from "./components/FaQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Section3 from "./components/Section3";
import Usefullness from "./components/Usefullness";
import VideoSection from "./components/VideoSection";
import WorkFlow from "./components/WorkFlow";

export default function Home() {
  return (
    <>
    {/* section 1 */}
      <Landing />
    {/* section 2 */}
      <VideoSection />
    {/* section  3 */}
      <Section3 />
    {/* section  4 */}
      <Features />
    {/* section  5 */}
      <Usefullness />
    {/* section  6 */}
      <WorkFlow />
    {/* section  7 */}
      <FaQs />
    {/* Footer */}
      <Footer />
  </>
  );
}
