import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SectionProgress from './components/SectionProgress';
import CameraSection from './components/sections/CameraSection';
import IdeasSection from './components/sections/IdeasSection';
import DisassemblySection from './components/sections/DisassemblySection';
import PartsSection from './components/sections/PartsSection';
import AssemblySection from './components/sections/AssemblySection';
import DrawingsSection from './components/sections/DrawingsSection';
import MalaSection from './components/sections/MalaSection';
import RenderizacaoSection from './components/sections/RenderizacaoSection';
import AnimacaoSection from './components/sections/AnimacaoSection';
import SimulationSection from './components/sections/SimulationSection';
import TeamSection from './components/sections/TeamSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navigation />
      <SectionProgress />
      <Hero />
      <main>
        <CameraSection />
        <IdeasSection />
        <DisassemblySection />
        <PartsSection />
        <AssemblySection />
        <DrawingsSection />
        <MalaSection />
        <RenderizacaoSection />
        <AnimacaoSection />
        <SimulationSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
