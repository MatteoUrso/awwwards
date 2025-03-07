import { About } from "./components/about";
import { Hero } from "./components/hero";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
