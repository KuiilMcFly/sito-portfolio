import Header from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <HeroBanner />
    </main>
  );
}
