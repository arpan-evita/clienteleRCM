import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Platform from './pages/Platform';
import About from './pages/About';
import WhyClientele from './pages/WhyClientele';
import Compliance from './pages/Compliance';
import Transition from './pages/Transition';
import Specialties from './pages/Specialties';
import Orthopedics from './pages/specialties/Orthopedics';
import PainManagement from './pages/specialties/PainManagement';
import Anesthesia from './pages/specialties/Anesthesia';
import Therapy from './pages/specialties/Therapy';
import ServicesOverview from './pages/services/ServicesOverview';
import FrontEnd from './pages/services/FrontEnd';
import MidCycle from './pages/services/MidCycle';
import BackEnd from './pages/services/BackEnd';
import RPM from './pages/services/RPM';
import RTM from './pages/services/RTM';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select which page to render based on path
  const renderActivePage = () => {
    switch (path) {
      case '/platform':
        return <Platform navigate={navigate} />;
      case '/about':
        return <About navigate={navigate} />;
      case '/why-clientele':
        return <WhyClientele navigate={navigate} />;
      case '/compliance':
        return <Compliance navigate={navigate} />;
      case '/transition':
        return <Transition navigate={navigate} />;
      case '/specialties':
      case '/specialties/chiropractic':
        return <Specialties navigate={navigate} currentPath={path} />;
      case '/specialties/therapy':
        return <Therapy navigate={navigate} />;
      case '/specialties/anesthesia':
        return <Anesthesia navigate={navigate} />;
      case '/specialties/orthopedics':
        return <Orthopedics navigate={navigate} />;
      case '/specialties/pain-management':
        return <PainManagement navigate={navigate} />;
      case '/services':
        return <ServicesOverview navigate={navigate} />;
      case '/services/front-end':
        return <FrontEnd navigate={navigate} />;
      case '/services/mid-cycle':
        return <MidCycle navigate={navigate} />;
      case '/services/back-end':
        return <BackEnd navigate={navigate} />;
      case '/services/rpm':
        return <RPM navigate={navigate} />;
      case '/services/rtm':
        return <RTM navigate={navigate} />;
      case '/':
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-teal selection:text-navy">
      {/* Header and top contact bars */}
      <Header currentPath={path} navigate={navigate} />

      {/* Main page view */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Corporate shared RCM footer */}
      <Footer navigate={navigate} />
    </div>
  );
}
