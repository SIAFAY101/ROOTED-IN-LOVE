import React, { useState } from 'react';
import { Search, Users, BookOpen, Heart, Calendar, MapPin, MessageCircle, Star, ChevronRight, Menu, X } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('resources');

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "Understanding Racial Identity Development",
      category: "Identity",
      type: "Article",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Step-by-Step Guide to Moisturizing Coily Hair",
      category: "Hair Care",
      type: "Video Tutorial",
      readTime: "12 min",
      featured: true
    },
    {
      id: 3,
      title: "Talking to Your Child About Microaggressions",
      category: "Identity",
      type: "Guide",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Best Products for Melanated Skin in Winter",
      category: "Skin Care",
      type: "Product Guide",
      readTime: "6 min read",
      featured: false
    }
  ];

  const communityStories = [
    {
      id: 1,
      name: "Sarah M.",
      childAge: "8 years old",
      story: "Learning to do my daughter's hair was intimidating at first, but connecting with other parents in our community changed everything.",
      avatar: "https://placehold.co/40x40/8B5CF6/FFFFFF?text=SM"
    },
    {
      id: 2,
      name: "Michael R.",
      childAge: "12 years old",
      story: "My son started asking hard questions about his identity. This app helped me find the right words and resources.",
      avatar: "https://placehold.co/40x40/06B6D4/FFFFFF?text=MR"
    }
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Aisha Johnson",
      specialty: "Child Psychologist",
      expertise: "Racial Identity Development",
      rating: 4.9,
      avatar: "https://placehold.co/60x60/F59E0B/FFFFFF?text=AJ"
    },
    {
      id: 2,
      name: "Tanya Williams",
      specialty: "Natural Hair Stylist",
      expertise: "Children's Protective Styles",
      rating: 4.8,
      avatar: "https://placehold.co/60x60/10B981/FFFFFF?text=TW"
    }
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Rooted</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'resources' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'community' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Community
            </button>
            <button 
              onClick={() => setActiveTab('experts')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'experts' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Experts
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => { setActiveTab('resources'); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
            >
              Resources
            </button>
            <button 
              onClick={() => { setActiveTab('community'); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
            >
              Community
            </button>
            <button 
              onClick={() => { setActiveTab('experts'); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
            >
              Experts
            </button>
            <button className="mt-2 w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nurturing Identity,
            <br />
            <span className="text-purple-600">Rooted in Love</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert guidance, community support, and practical resources for foster and adoptive parents raising Black and mixed-race children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ResourcesSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical guides, tutorials, and expert advice on hair care, skin care, identity development, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {resource.category}
                </span>
                {resource.featured && (
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{resource.type}</span>
                <span>{resource.readTime}</span>
              </div>
              <button className="mt-4 text-purple-600 font-medium flex items-center hover:text-purple-700">
                Read More <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CommunitySection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Stories, Real Support</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with other parents who understand your journey and share their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={story.avatar} 
                  alt={story.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.childAge}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{story.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExpertsSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Guidance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access trusted professionals who specialize in supporting transracial foster and adoptive families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <img 
                  src={expert.avatar} 
                  alt={expert.name} 
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-purple-600 font-medium">{expert.specialty}</p>
                  <p className="text-gray-600 mt-1">{expert.expertise}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{expert.rating}</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Schedule Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FeaturesSection = () => (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for every aspect of your parenting journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Resources</h3>
            <p className="text-gray-600">Articles, videos, and guides on identity, hair, skin, and culture.</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Supportive Community</h3>
            <p className="text-gray-600">Connect with other parents who understand your unique journey.</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Resources</h3>
            <p className="text-gray-600">Find stylists, therapists, and cultural events in your area.</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Access</h3>
            <p className="text-gray-600">Direct access to professionals specializing in transracial adoption.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="ml-2 text-xl font-bold">Rooted</span>
            </div>
            <p className="text-gray-400">
              Supporting foster and adoptive parents in nurturing confident, culturally-connected children.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Hair Care Guides</a></li>
              <li><a href="#" className="hover:text-white">Identity Development</a></li>
              <li><a href="#" className="hover:text-white">Skin Care Tips</a></li>
              <li><a href="#" className="hover:text-white">Cultural Activities</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Parent Forums</a></li>
              <li><a href="#" className="hover:text-white">Local Groups</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rooted. All rights reserved. Created with love for transracial foster and adoptive families.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {activeTab === 'resources' && <ResourcesSection />}
      {activeTab === 'community' && <CommunitySection />}
      {activeTab === 'experts' && <ExpertsSection />}
      
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;