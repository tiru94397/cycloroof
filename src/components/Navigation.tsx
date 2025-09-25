import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Badge } from './ui/badge';
import { 
  Menu, 
  Home, 
  Search, 
  Car, 
  Calculator, 
  Calendar, 
  ShieldCheck, 
  Info,
  LogOut,
  GitCompare
} from 'lucide-react';
import type { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  compareCount: number;
}

export function Navigation({ currentPage, onNavigate, onLogout, compareCount }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, page: 'home' as Page },
    { id: 'catalog', label: 'Browse Bikes', icon: Search, page: 'catalog' as Page },
    { id: 'calculators', label: 'Calculators', icon: Calculator, page: 'calculators' as Page },
    { id: 'upcoming', label: 'Upcoming Launches', icon: Calendar, page: 'upcoming' as Page },
    { id: 'rentals', label: 'Rentals', icon: Car, page: 'rentals' as Page },
    { id: 'warranty', label: 'Warranty & Support', icon: ShieldCheck, page: 'warranty' as Page },
    { id: 'about', label: 'About Cycloroof', icon: Info, page: 'about' as Page },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex items-center cursor-pointer min-w-0"
          onClick={() => handleNavigate('home')}
        >
          <img 
            src="/1.jpg" 
            alt="App Icon" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full mr-2" 
          />
          <span className="text-base sm:text-lg font-bold text-primary truncate">Cycloroof</span>
        </div>

        {/* Menu Section */}
        <div className="hidden lg:flex items-center gap-x-4 flex-1 justify-center min-w-0">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.page ? 'default' : 'ghost'}
              onClick={() => handleNavigate(item.page)}
              className={`h-10 px-3 text-sm sm:text-base truncate ${
                currentPage === item.page
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          {/* Compare Button */}
          <Button
            variant="ghost"
            onClick={() => handleNavigate('compare')}
            className="relative hidden sm:flex h-10 px-3 text-sm"
          >
            <GitCompare className="w-5 h-5" />
            {compareCount > 0 && (
              <Badge className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5">
                {compareCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-gradient-to-b from-background to-card">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <img src="/1.jpg" alt="App Icon" className="w-6 h-6 object-contain rounded-full mr-2" />
                  Cycloroof
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavigate(item.page)}
                    className={`w-full justify-start h-12 ${
                      currentPage === item.page 
                        ? 'bg-accent/20 text-accent border-l-4 border-accent' 
                        : 'text-foreground hover:bg-accent/10'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-accent" />
                    {item.label}
                  </Button>
                ))}

                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('compare')}
                  className="w-full justify-start h-12 text-foreground hover:bg-accent/10"
                >
                  <GitCompare className="w-5 h-5 mr-3 text-accent" />
                  Compare Bikes
                  {compareCount > 0 && (
                    <Badge className="ml-auto bg-accent text-accent-foreground">
                      {compareCount}
                    </Badge>
                  )}
                </Button>

                <div className="border-t border-border pt-4 mt-4">
                  <Button
                    variant="ghost"
                    onClick={onLogout}
                    className="w-full justify-start h-12 text-destructive hover:bg-destructive/10"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Logout */}
          <Button
            variant="ghost"
            onClick={onLogout}
            className="hidden lg:flex h-10 px-3 text-sm text-foreground hover:text-destructive"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
