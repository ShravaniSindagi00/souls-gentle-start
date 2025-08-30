import { Link } from 'react-router-dom'
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">About Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Offering accessible, compassionate online counseling to support
              your mental well-being, anytime, anywhere.
            </p>
          </div>

          {/* Call Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
            <p className="text-sm text-muted-foreground">+91 93538 57659</p>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">
                Send Us an Email at
              </h4>
              <p className="text-sm text-muted-foreground">
                contact@oursoulss.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Address</h3>
            <p className="text-sm text-muted-foreground">
              Hubballi, Karnataka IN
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/terms-conditions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              TERMS & CONDITIONS
            </Link>
            <Link
              to="/refund-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              REFUND POLICY
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Copyright © 2025 - OurSoulss
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
