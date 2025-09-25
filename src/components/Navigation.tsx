import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { 
  Menu, 
  Home, 
  Search, 
  Settings, 
  Car, 
  Wrench, 
  Calculator, 
  Calendar, 
  MapPin, 
  Crown, 
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

  const serviceItems = [
    { label: 'Normal Service', icon: Settings },
    { label: 'Specialized Service', icon: Wrench },
    { label: 'Stickering', icon: Car },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavigate('home')}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-yellow-600 rounded-xl mr-3 shadow-lg">
                <span className="text-lg text-primary">🏍️</span>
              </div>
              <span className="text-2xl font-bold text-primary">Cycloroof</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Button
                variant={currentPage === 'home' ? 'default' : 'ghost'}
                onClick={() => handleNavigate('home')}
                className={currentPage === 'home' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'text-foreground hover:text-accent'}
              >
                Home
              </Button>
              
              <Button
                variant={currentPage === 'catalog' ? 'default' : 'ghost'}
                onClick={() => handleNavigate('catalog')}
                className={currentPage === 'catalog' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'text-foreground hover:text-accent'}
              >
                Browse
              </Button>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-accent">
                    Services
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-card border-border shadow-lg">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.label} className="flex items-center hover:bg-accent/10">
                      <item.icon className="w-4 h-4 mr-2 text-accent" />
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant={currentPage === 'rentals' ? 'default' : 'ghost'}
                onClick={() => handleNavigate('rentals')}
                className={currentPage === 'rentals' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'text-foreground hover:text-accent'}
              >
                Rentals
              </Button>

              <Button
                variant="ghost"
                className="text-foreground hover:text-accent flex items-center"
              >
                <Crown className="w-4 h-4 mr-1 text-accent" />
                Elite Membership
              </Button>

              <Button
                variant="ghost"
                className="text-foreground hover:text-accent flex items-center"
              >
                <MapPin className="w-4 h-4 mr-1 text-accent" />
                Nearby Stores
              </Button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Compare Button */}
              <Button
                variant="ghost"
                onClick={() => handleNavigate('compare')}
                className="relative text-foreground hover:text-accent hidden sm:flex"
              >
                <GitCompare className="w-5 h-5" />
                {compareCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5">
                    {compareCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-gradient-to-b from-background to-card">
                  <SheetHeader>
                    <SheetTitle className="flex items-center text-left">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-accent to-yellow-600 rounded-lg mr-3">
                        <span className="text-sm text-primary">🏍️</span>
                      </div>
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
                    
                    {/* Compare in Mobile */}
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

                    {/* Services in Mobile */}
                    <div className="space-y-1 ml-4">
                      <p className="text-sm font-medium text-primary px-3 py-2">Services</p>
                      {serviceItems.map((item) => (
                        <Button
                          key={item.label}
                          variant="ghost"
                          className="w-full justify-start h-10 text-muted-foreground hover:bg-accent/10"
                        >
                          <item.icon className="w-4 h-4 mr-3 text-accent" />
                          {item.label}
                        </Button>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 mt-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-foreground hover:bg-accent/10"
                      >
                        <Crown className="w-5 h-5 mr-3 text-accent" />
                        Elite Membership
                      </Button>
                      
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-foreground hover:bg-accent/10"
                      >
                        <MapPin className="w-5 h-5 mr-3 text-accent" />
                        Nearby Stores
                      </Button>
                      
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
                className="hidden lg:flex text-foreground hover:text-destructive"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}