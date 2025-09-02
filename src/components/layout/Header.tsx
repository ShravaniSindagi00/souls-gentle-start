import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-soft group-hover:shadow-floating transition-all duration-300">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              OurSoulss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary',
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/book">
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-accent text-accent-foreground hover:shadow-floating"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4 px-4">
              <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full bg-gradient-accent text-accent-foreground"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
