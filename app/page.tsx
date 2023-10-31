import Header from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { TransitionBar } from "./components/TransitionBar";
export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <HeroBanner />
      <TransitionBar />
    </main>
  );
}
