import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/images/logo-white.png" alt="Perfume Shop" width={40} height={40} />
              <span className="ml-2 text-xl font-semibold text-white">Essence</span>
            </Link>
            <p className="text-sm mb-4">
              Curating the finest fragrances from around the world since 2010. Our passion is helping you discover
              scents that tell your story.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-sm hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive offers and fragrance tips.</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700" />
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Essence Perfume Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
