
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Menu, X, User } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose
} from './ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose
} from './ui/dialog';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past threshold
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'Profile', path: '/profile' }
  ];

  const NavLinks = ({ mobile = false, onLinkClick = () => {} }) => (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={onLinkClick}
          className={`text-gray-300 hover:text-violet-400 transition-colors font-medium ${
            mobile ? 'text-lg py-2' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  const AuthButton = ({ mobile = false }) => {
    // Desktop - Modal
    if (!mobile) {
      return (
        <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
          <DialogTrigger asChild>
            <button className="flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl transition-colors">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
            <DialogTitle className="sr-only">Authentication</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4 text-red-500" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <AuthModal />
          </DialogContent>
        </Dialog>
      );
    }

    // Mobile - Bottom Sheet (using Sheet component)
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl transition-colors w-full justify-center">
            <User className="h-4 w-4" />
            <span>Login</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="bg-gray-900 border-gray-800 rounded-t-2xl">
          <SheetHeader>
            <SheetTitle className="text-white text-center">Welcome to TrendWise</SheetTitle>
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-4 w-4 text-red-500" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetHeader>
          <div className="mt-4">
            <AuthModal />
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <nav className={`bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-2 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TrendWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <AuthButton />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <AuthButton mobile />
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-300 hover:text-white p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gray-900 border-gray-800">
                <SheetHeader>
                  <SheetTitle className="text-white text-left">Navigation</SheetTitle>
                  <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-4 w-4 text-red-500" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetHeader>
                <div className="mt-8">
                  <NavLinks mobile onLinkClick={() => setIsOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
