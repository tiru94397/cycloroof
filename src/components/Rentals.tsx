import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
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
  Search
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
      name: 'Super Meteor 650',
      brand: 'Royal Enfield',
      image: '/royalenfield-supermeteor650.jpg',
      hourlyRate: 200,
      dailyRate: 1600,
      weeklyRate: 9500,
      fuelType: 'Petrol',
      rating: 4.7,
      available: true,
      location: 'Mumbai Central',
      features: ['Helmet Included', 'Insurance Covered', 'Roadside Assistance']
    },
    {
      id: '2',
      name: 'Street Triple RS',
      brand: 'Triumph',
      image: '/triumph-streettriple-rs.jpg',
      hourlyRate: 300,
      dailyRate: 2200,
      weeklyRate: 13500,
      fuelType: 'Petrol',
      rating: 4.8,
      available: true,
      location: 'Delhi NCR',
      features: ['765cc BS6 Engine', '128.2 bhp Power', '80 Nm Torque', 'Premium Suspension', 'Dual Disc Brakes']
    },
    {
      id: '3',
      name: 'GT 650',
      brand: 'Vintage',
      image: '/gt_650.jpg',
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
      name: 'Honda Activa EV',
      brand: 'Electric',
      image: '/honda_activa_ev.jpg',
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
      name: 'Honda Unicorn',
      brand: 'Adventure',
      image: '/honda_unicorn.jpg',
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
      image: '/classic-350.jpg',
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

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bike Rentals</h1>
          <p className="text-lg text-gray-600">Rent bikes by the hour, day, or week for your perfect ride</p>
        </div>

        {/* Filters */}
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
                    {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
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
                    {durations.map(dur => <SelectItem key={dur} value={dur}>{dur}</SelectItem>)}
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
                    {bikeTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white border-0 h-10 flex items-center justify-center">
                  <Search className="w-4 h-4 mr-2" /> Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalBikes.map(bike => (
            <Card key={bike.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${bike.available ? 'bg-white' : 'bg-gray-100'}`}>
              <div className="relative">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className={`w-full h-48 object-cover ${bike.available ? '' : 'grayscale'}`}
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`text-white ${bike.available ? 'bg-green-500' : 'bg-red-500'}`}>
                    {bike.available ? 'Available' : 'Rented'}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2 py-1 flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 text-yellow-400" /> {bike.rating}
                </div>
                {bike.fuelType === 'Electric' && (
                  <Badge className="absolute bottom-3 left-3 bg-green-500 text-white flex items-center gap-1 text-xs px-2 py-1 rounded">
                    <Fuel className="w-3 h-3" /> Electric
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge className="text-orange-500 border-orange-200 mb-2">{bike.brand}</Badge>
                    <h3 className="font-bold text-gray-900">{bike.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3 mr-1" /> {bike.location}
                    </div>
                  </div>
                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-3 grid grid-cols-3 gap-2 text-center">
                    <div><p className="text-xs text-gray-500">Hourly</p><p className="font-semibold text-gray-900">₹{bike.hourlyRate}</p></div>
                    <div><p className="text-xs text-gray-500">Daily</p><p className="font-semibold text-gray-900">₹{bike.dailyRate}</p></div>
                    <div><p className="text-xs text-gray-500">Weekly</p><p className="font-semibold text-gray-900">₹{bike.weeklyRate}</p></div>
                  </div>
                  {/* Features */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Included</p>
                    <div className="flex flex-wrap gap-1">
                      {bike.features.map((feature, idx) => (
                        <Badge key={idx} className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      disabled={!bike.available}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg disabled:bg-gray-300 disabled:text-gray-500 flex items-center justify-center"
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

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our experts can help you find the perfect bike for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 border-0 px-6">Call Support</Button>
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
