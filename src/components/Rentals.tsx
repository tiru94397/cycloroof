import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Car, 
  Clock, 
  MapPin, 
  Star,
  Calendar,
  Shield,
  Fuel,
  Search,
  Filter
} from 'lucide-react';
import type { Page } from '../App';

interface RentalsProps {
  onNavigate: (page: Page) => void;
}

export function Rentals({ onNavigate }: RentalsProps) {
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [bikeType, setBikeType] = useState('');

  const rentalBikes = [
    {
      id: '1',
      name: 'Speed 400',
      brand: 'Triumph',
      image: 'https://images.unsplash.com/photo-1669905153773-4fab38326b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NjU1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 150,
      dailyRate: 1200,
      weeklyRate: 7500,
      fuelType: 'Petrol',
      rating: 4.8,
      available: true,
      location: 'Mumbai Central',
      features: ['Helmet Included', 'Insurance Covered', 'Roadside Assistance']
    },
    {
      id: '2',
      name: 'Electric Scooter Pro',
      brand: 'Modern',
      image: 'https://images.unsplash.com/photo-1583322319396-08178ea4f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 80,
      dailyRate: 600,
      weeklyRate: 3500,
      fuelType: 'Electric',
      rating: 4.6,
      available: true,
      location: 'Delhi NCR',
      features: ['Eco Friendly', 'Silent Operation', 'App Connected']
    },
    {
      id: '3',
      name: 'Cafe Racer 650',
      brand: 'Vintage',
      image: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 200,
      dailyRate: 1500,
      weeklyRate: 9000,
      fuelType: 'Petrol',
      rating: 4.9,
      available: false,
      location: 'Bangalore',
      features: ['Premium Bike', 'Vintage Style', 'Performance Focused']
    },
    {
      id: '4',
      name: 'Urban E-Bike',
      brand: 'Electric',
      image: 'https://images.unsplash.com/photo-1692668696811-90976b749459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzAwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 50,
      dailyRate: 400,
      weeklyRate: 2500,
      fuelType: 'Electric',
      rating: 4.4,
      available: true,
      location: 'Pune',
      features: ['Lightweight', 'City Commute', 'Budget Friendly']
    },
    {
      id: '5',
      name: 'Adventure 390',
      brand: 'Adventure',
      image: 'https://images.unsplash.com/photo-1669905153773-4fab38326b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NjU1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 180,
      dailyRate: 1400,
      weeklyRate: 8500,
      fuelType: 'Petrol',
      rating: 4.7,
      available: true,
      location: 'Chennai',
      features: ['Off-road Ready', 'Long Distance', 'Adventure Gear']
    },
    {
      id: '6',
      name: 'Classic 350',
      brand: 'Heritage',
      image: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hourlyRate: 120,
      dailyRate: 900,
      weeklyRate: 5500,
      fuelType: 'Petrol',
      rating: 4.5,
      available: true,
      location: 'Hyderabad',
      features: ['Classic Style', 'Comfortable Ride', 'Reliable']
    }
  ];

  const locations = ['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];
  const durations = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
  const bikeTypes = ['All Types', 'Petrol', 'Electric', 'Sports', 'Commuter', 'Adventure'];

  const getRateByDuration = (bike: any, duration: string) => {
    switch (duration) {
      case 'Hourly': return `₹${bike.hourlyRate}/hr`;
      case 'Daily': return `₹${bike.dailyRate}/day`;
      case 'Weekly': return `₹${bike.weeklyRate}/week`;
      case 'Monthly': return `₹${bike.weeklyRate * 4}/month`;
      default: return `₹${bike.hourlyRate}/hr`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bike Rentals</h1>
          <p className="text-lg text-gray-600">Rent bikes by the hour, day, or week for your perfect ride</p>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-4 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map(dur => (
                      <SelectItem key={dur} value={dur}>{dur}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Bike Type</Label>
                <Select value={bikeType} onValueChange={setBikeType}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    {bikeTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white border-0 h-10">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-md bg-white text-center">
            <CardContent className="p-4">
              <Car className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{rentalBikes.length}</p>
              <p className="text-sm text-gray-600">Available Bikes</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-white text-center">
            <CardContent className="p-4">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{locations.length}</p>
              <p className="text-sm text-gray-600">Cities Covered</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-white text-center">
            <CardContent className="p-4">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">₹50</p>
              <p className="text-sm text-gray-600">Starting from /hr</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-white text-center">
            <CardContent className="p-4">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Insured</p>
            </CardContent>
          </Card>
        </div>

        {/* Available Bikes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalBikes.map((bike) => (
            <Card key={bike.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${bike.available ? 'bg-white' : 'bg-gray-100'}`}>
              <div className="relative">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className={`w-full h-48 object-cover ${bike.available ? '' : 'grayscale'}`}
                />
                <div className="absolute top-3 left-3">
                  {bike.available ? (
                    <Badge className="bg-green-500 text-white">Available</Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">Rented</Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2 py-1">
                  <div className="flex items-center text-xs">
                    <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                    <span className="font-medium">{bike.rating}</span>
                  </div>
                </div>
                {bike.fuelType === 'Electric' && (
                  <Badge className="absolute bottom-3 left-3 bg-green-500 text-white">
                    <Fuel className="w-3 h-3 mr-1" />
                    Electric
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="text-orange-500 border-orange-200 mb-2">
                      {bike.brand}
                    </Badge>
                    <h3 className="font-bold text-gray-900">{bike.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {bike.location}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xs text-gray-500">Hourly</p>
                        <p className="font-semibold text-gray-900">₹{bike.hourlyRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Daily</p>
                        <p className="font-semibold text-gray-900">₹{bike.dailyRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Weekly</p>
                        <p className="font-semibold text-gray-900">₹{bike.weeklyRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Included</p>
                    <div className="flex flex-wrap gap-1">
                      {bike.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      disabled={!bike.available}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg disabled:bg-gray-300 disabled:text-gray-500"
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {bike.available ? 'Book Now' : 'Not Available'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-gray-200 hover:bg-gray-50 rounded-lg"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Search & Select</h3>
              <p className="text-gray-600 text-sm">Choose your preferred bike and location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Book & Pay</h3>
              <p className="text-gray-600 text-sm">Select duration and make secure payment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Pick Up</h3>
              <p className="text-gray-600 text-sm">Collect your bike from the rental location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Ride Safe</h3>
              <p className="text-gray-600 text-sm">Enjoy your ride with full insurance coverage</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our experts can help you find the perfect bike for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 border-0 px-6">
              Call Support
            </Button>
            <Button 
              onClick={() => onNavigate('catalog')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-500 px-6"
            >
              View All Bikes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}