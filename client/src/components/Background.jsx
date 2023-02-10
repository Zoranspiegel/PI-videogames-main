import animatedBackground from "../assets/Circuit Electric Colorful Moving Lines.mp4";
import StyledBackground from "./styles/StyledBackground";
export default function Background() {
  return (
    <StyledBackground>
        <video src={animatedBackground} autoPlay loop muted></video>
    </StyledBackground>
  );
}
