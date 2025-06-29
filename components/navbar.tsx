"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Perfume Shop" width={40} height={40} />
          <span className="ml-2 text-xl font-semibold">Essence</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Home
          </Link>
          <Link href="/collections/women" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Women
          </Link>
          <Link href="/collections/men" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Men
          </Link>
          <Link href="/collections/unisex" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Unisex
          </Link>
          <Link href="/collections/gift-sets" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Gift Sets
          </Link>
        </nav>

        {/* Search Bar (Desktop) */}
        {isSearchOpen ? (
          <div className="hidden md:flex items-center absolute inset-x-0 top-0 h-16 bg-white px-4">
            <Input type="search" placeholder="Search for perfumes..." className="flex-1 max-w-lg mx-auto" autoFocus />
            <Button variant="ghost" size="icon" className="absolute right-4" onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        ) : null}

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-rose-600 text-[10px] font-bold text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="py-4">
                  <Input type="search" placeholder="Search for perfumes..." />
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-sm font-medium py-2 hover:text-rose-600 transition-colors">
                    Home
                  </Link>
                  <Link
                    href="/collections/women"
                    className="text-sm font-medium py-2 hover:text-rose-600 transition-colors"
                  >
                    Women
                  </Link>
                  <Link
                    href="/collections/men"
                    className="text-sm font-medium py-2 hover:text-rose-600 transition-colors"
                  >
                    Men
                  </Link>
                  <Link
                    href="/collections/unisex"
                    className="text-sm font-medium py-2 hover:text-rose-600 transition-colors"
                  >
                    Unisex
                  </Link>
                  <Link
                    href="/collections/gift-sets"
                    className="text-sm font-medium py-2 hover:text-rose-600 transition-colors"
                  >
                    Gift Sets
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
