import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Fuel, 
  Zap, 
  Star,
  Heart,
  GitCompare,
  Eye
} from 'lucide-react';
import type { Page, Bike } from '../App';

interface BikeCatalogProps {
  onNavigate: (page: Page, bike?: Bike) => void;
  onAddToCompare: (bike: Bike) => void;
  compareList: Bike[];
}

export function BikeCatalog({ onNavigate, onAddToCompare, compareList }: BikeCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [selectedBrand, setSelectedBrand] = useState('all-brands');
  const [selectedFuelType, setSelectedFuelType] = useState('all-types');
  const [sortBy, setSortBy] = useState('default');

  const bikes: Bike[] = [
    {
      id: '1',
      name: 'Speed 400',
      brand: 'Triumph',
      price: 275000,
      image: '/trumph.jpg', // <-- Use relative path to your image
      mileage: 35,
      fuelType: 'Petrol',
      engine: '398cc',
      power: '40 HP',
      torque: '37.5 Nm',
      rpm: '6500',
      cylinders: 1,
      description: 'The Speed 400 is a modern classic that combines retro styling with contemporary performance. Perfect for city commutes and weekend adventures.'
    },
    {
      id: '2',
      name: 'Ather 450S',
      brand: 'Modern',
      price: 150000,
      image: '/evscoooter.jpg', // <-- Use relative path to your image
      mileage: 120,
      fuelType: 'Electric',
      engine: '3kW Motor',
      power: '4 HP',
      torque: '25 Nm',
      rpm: 'N/A',
      cylinders: 0,
      description: 'The future of urban mobility. Zero emissions, low maintenance, and smart connectivity features make this the perfect eco-friendly choice.'
    },
    {
      id: '3',
      name: 'Honda Unicorn',
      brand: 'Vintage',
      price: 110000,
      image: '/honda_unicorn.jpg', // <-- Use relative path to your image
      mileage: 28,
      fuelType: 'Petrol',
      engine: '648cc',
      power: '47 HP',
      torque: '52 Nm',
      rpm: '7250',
      cylinders: 2,
      description: 'Classic cafe racer styling meets modern engineering. This bike is perfect for riders who appreciate timeless design and spirited performance.'
    },
    {
      id: '4',
      name: 'Honda Activa EV',
      brand: 'Electric',
      price: 85000,
      image: '/honda_activa_ev.jpg', // <-- Use relative path to your image
      mileage: 80,
      fuelType: 'Electric',
      engine: '1.5kW Motor',
      power: '2 HP',
      torque: '15 Nm',
      rpm: 'N/A',
      cylinders: 0,
      description: 'Designed for the modern urban commuter. Lightweight, efficient, and packed with smart features for the connected rider.'
    },
    {
      id: '5',
      name: 'Royal Enfield Continental GT 650',
      brand: 'Adventure',
      price: 350000,
      image: '/gt_650.jpg', // <-- Use relative path to your image
      mileage: 32,
      fuelType: 'Petrol',
      engine: '390cc',
      power: '44 HP',
      torque: '37 Nm',
      rpm: '9000',
      cylinders: 1,
      description: 'Built for adventure seekers. Whether its city streets or mountain trails, this bike handles it all with confidence and style.'
    },
    {
      id: '6',
      name: 'Classic 350',
      brand: 'Heritage',
      price: 185000,
      image: '/classic-350.jpg', // <-- Use relative path to your image
      mileage: 40,
      fuelType: 'Petrol',
      engine: '349cc',
      power: '20 HP',
      torque: '27 Nm',
      rpm: '5250',
      cylinders: 1,
      description: 'Timeless design meets modern reliability. A perfect blend of classic styling and contemporary engineering for the purist rider.'
    }
  ];

  const brands = Array.from(new Set(bikes.map(bike => bike.brand)));
  const fuelTypes = Array.from(new Set(bikes.map(bike => bike.fuelType)));

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = bike.price >= priceRange[0] && bike.price <= priceRange[1];
    const matchesBrand = !selectedBrand || selectedBrand === 'all-brands' || bike.brand === selectedBrand;
    const matchesFuelType = !selectedFuelType || selectedFuelType === 'all-types' || bike.fuelType === selectedFuelType;
    
    return matchesSearch && matchesPrice && matchesBrand && matchesFuelType;
  });

  const sortedBikes = [...filteredBikes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'mileage':
        return b.mileage - a.mileage;
      case 'brand':
        return a.brand.localeCompare(b.brand);
      case 'default':
      default:
        return 0;
    }
  });

  const isInCompareList = (bikeId: string) => {
    return compareList.some(bike => bike.id === bikeId);
  };

  const handleViewDetails = (bike: Bike) => {
    onNavigate('details', bike);
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Browse Bikes</h1>
          <p className="text-lg text-muted-foreground">Find your perfect two-wheeler from our extensive collection</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-6 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-card-foreground mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search bikes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border focus:border-accent focus:ring-accent"
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Brand</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-brands">All Brands</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Fuel Type Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Fuel Type</label>
              <Select value={selectedFuelType} onValueChange={setSelectedFuelType}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  {fuelTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="mileage">Best Mileage</SelectItem>
                  <SelectItem value="brand">Brand A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : ''}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : ''}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500000}
              min={50000}
              step={10000}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {sortedBikes.length} of {bikes.length} bikes
          </p>
          {compareList.length > 0 && (
            <Button
              onClick={() => onNavigate('compare')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <GitCompare className="w-4 h-4 mr-2" />
              Compare ({compareList.length})
            </Button>
          )}
        </div>

        {/* Bikes Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedBikes.map((bike) => (
            <Card key={bike.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group">
              {viewMode === 'grid' ? (
                <>
                  <div className="relative">
                    <ImageWithFallback
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 bg-white/80 hover:bg-white"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      {bike.fuelType === 'Electric' && (
                        <Badge className="bg-green-500 text-white">
                          <Zap className="w-3 h-3 mr-1" />
                          EV
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{bike.name}</h3>
                        <p className="text-gray-600">{bike.brand}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{bike.price.toLocaleString()}
                        </span>
                        <div className="flex items-center text-sm text-gray-600">
                          <Fuel className="w-4 h-4 mr-1 text-orange-500" />
                          {bike.mileage} km/l
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleViewDetails(bike)}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          onClick={() => onAddToCompare(bike)}
                          disabled={isInCompareList(bike.id) || compareList.length >= 3}
                          variant="outline" 
                          className={`flex-1 border-gray-200 hover:bg-gray-50 rounded-lg ${
                            isInCompareList(bike.id) ? 'bg-orange-50 text-orange-600 border-orange-200' : ''
                          }`}
                        >
                          <GitCompare className="w-4 h-4 mr-1" />
                          {isInCompareList(bike.id) ? 'Added' : 'Compare'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex p-6">
                  <ImageWithFallback
                    src={bike.image}
                    alt={bike.name}
                    className="w-32 h-24 object-cover rounded-lg mr-6"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{bike.name}</h3>
                        <p className="text-gray-600">{bike.brand}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{bike.price.toLocaleString()}
                        </span>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Fuel className="w-4 h-4 mr-1 text-orange-500" />
                          {bike.mileage} km/l
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{bike.description}</p>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        onClick={() => handleViewDetails(bike)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg"
                      >
                        View Details
                      </Button>
                      <Button 
                        onClick={() => onAddToCompare(bike)}
                        disabled={isInCompareList(bike.id) || compareList.length >= 3}
                        variant="outline" 
                        className={`border-gray-200 hover:bg-gray-50 rounded-lg ${
                          isInCompareList(bike.id) ? 'bg-orange-50 text-orange-600 border-orange-200' : ''
                        }`}
                      >
                        <GitCompare className="w-4 h-4 mr-1" />
                        {isInCompareList(bike.id) ? 'Added to Compare' : 'Add to Compare'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {sortedBikes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No bikes found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
} 