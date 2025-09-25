import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { BikeCatalog } from './components/BikeCatalog';
import { BikeDetails } from './components/BikeDetails';
import { ComparisonTool } from './components/ComparisonTool';
import { Calculators } from './components/Calculators';
import { UpcomingLaunches } from './components/UpcomingLaunches';
import { Rentals } from './components/Rentals';
import { WarrantySupport } from './components/WarrantySupport';
import { About } from './components/About';
import { Footer } from './components/Footer';

export type Page = 'login' | 'home' | 'catalog' | 'details' | 'compare' | 'calculators' | 'upcoming' | 'rentals' | 'warranty' | 'about';

export interface Bike {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  mileage: number;
  fuelType: 'Petrol' | 'Electric' | 'Hybrid';
  engine: string;
  power: string;
  torque: string;
  rpm: string;
  cylinders: number;
  description: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [compareList, setCompareList] = useState<Bike[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (page: Page, bike?: Bike) => {
    setCurrentPage(page);
    if (bike) setSelectedBike(bike);
  };

  const addToCompare = (bike: Bike) => {
    if (compareList.length < 3 && !compareList.find(b => b.id === bike.id)) {
      setCompareList([...compareList, bike]);
    }
  };

  const removeFromCompare = (bikeId: string) => {
    setCompareList(compareList.filter(b => b.id !== bikeId));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onLogout={handleLogout}
        compareCount={compareList.length}
      />
      
      <main className="pt-16 lg:pt-20">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'catalog' && (
          <BikeCatalog 
            onNavigate={navigateTo} 
            onAddToCompare={addToCompare}
            compareList={compareList}
          />
        )}
        {currentPage === 'details' && selectedBike && (
          <BikeDetails 
            bike={selectedBike} 
            onAddToCompare={addToCompare}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'compare' && (
          <ComparisonTool 
            bikes={compareList} 
            onRemove={removeFromCompare}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'calculators' && <Calculators />}
        {currentPage === 'upcoming' && <UpcomingLaunches onNavigate={navigateTo} />}
        {currentPage === 'rentals' && <Rentals onNavigate={navigateTo} />}
        {currentPage === 'warranty' && <WarrantySupport />}
        {currentPage === 'about' && <About />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}


