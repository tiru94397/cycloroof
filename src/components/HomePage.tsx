import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Star, 
  Zap, 
  Shield, 
  Calculator, 
  Calendar, 
  Gift,
  Fuel,
  Award,
  ArrowRight,
  Search
} from 'lucide-react';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredBikes = [
    {
      id: '1',
      name: 'Speed 400',
      brand: 'Triumph',
      price: 275000,
      image: 'https://images.unsplash.com/photo-1669905153773-4fab38326b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTg2NTU2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mileage: 35,
      badge: 'New Launch'
    },
    {
      id: '2',
      name: 'Electric Scooter Pro',
      brand: 'Modern',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1583322319396-08178ea4f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mileage: 120,
      badge: 'Eco Friendly'
    },
    {
      id: '3',
      name: 'Cafe Racer 650',
      brand: 'Vintage',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mileage: 28,
      badge: 'Premium'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage on all vehicles'
    },
    {
      icon: Calculator,
      title: 'EMI Calculator',
      description: 'Calculate your monthly payments instantly'
    },
    {
      icon: Calendar,
      title: 'Test Rides',
      description: 'Book test rides at your convenience'
    },
    {
      icon: Award,
      title: 'Elite Membership',
      description: 'Exclusive benefits for premium members'
    }
  ];

  const offers = [
    {
      title: 'Festive Season Sale',
      description: 'Up to ₹50,000 off on selected bikes',
      discount: '20% OFF',
      color: 'bg-gradient-to-r from-orange-400 to-red-500'
    },
    {
      title: 'EV Special Offer',
      description: 'Zero down payment on electric vehicles',
      discount: '0% Down',
      color: 'bg-gradient-to-r from-green-400 to-blue-500'
    },
    {
      title: 'Exchange Bonus',
      description: 'Extra ₹25,000 on bike exchange',
      discount: '₹25K Extra',
      color: 'bg-gradient-to-r from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-card to-accent/10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  India's #1 Two-Wheeler Marketplace
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                  Your two-wheeler,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
                    your way
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                  Buy, compare, rent, and service bikes, scooters, and EVs all under one roof. 
                  Experience the future of mobility with Cycloroof.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('catalog')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Browse Bikes
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate('calculators')}
                  className="border-border hover:bg-accent/10 hover:border-accent h-14 px-8 rounded-xl transition-all duration-200"
                >
                  <Calculator className="w-5 h-5 mr-2 text-accent" />
                  EMI Calculator
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-1 text-accent" />
                  <span>500+ Models</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-accent" />
                  <span>Verified Dealers</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-accent" />
                  <span>4.8 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="/1.jpg"
                alt="Hero motorcycle rider"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Featured Bikes</h2>
            <p className="text-xl text-muted-foreground">Handpicked selection of our top-rated two-wheelers</p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {featuredBikes.map((bike) => (
                <CarouselItem key={bike.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-card">
                    <div className="relative">
                      <ImageWithFallback
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0">
                        {bike.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold text-card-foreground">{bike.name}</h3>
                          <p className="text-muted-foreground">{bike.brand}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-card-foreground">
                            ₹{bike.price.toLocaleString()}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Fuel className="w-4 h-4 mr-1 text-accent" />
                            {bike.mileage} km/l
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => onNavigate('catalog')}
                            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground border-0 rounded-lg"
                          >
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex-1 border-border hover:bg-accent/10 rounded-lg"
                          >
                            Compare
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Offers & Discounts</h2>
            <p className="text-xl text-muted-foreground">Limited time deals you don't want to miss</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
                <div className={`${offer.color} p-6 text-white relative`}>
                  <div className="absolute top-3 right-3">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">{offer.discount}</div>
                    <h3 className="text-xl font-bold">{offer.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-lg">
                    Claim Offer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-background to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Why Choose Cycloroof</h2>
            <p className="text-xl text-muted-foreground">Everything you need for your two-wheeler journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 text-center p-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-600 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Ride?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of satisfied customers who found their dream two-wheeler with Cycloroof
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('catalog')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 h-14 px-8 rounded-xl shadow-lg"
            >
              Start Browsing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('upcoming')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 rounded-xl"
            >
              View Upcoming Launches
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}