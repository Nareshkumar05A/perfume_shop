import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

// Sample data for seeding the database
const perfumeData = [
  {
    _id: new ObjectId(),
    name: "Midnight Bloom",
    brand: "Essence Luxury",
    price: 129.99,
    shortDescription: "A captivating floral fragrance with notes of jasmine and amber.",
    description:
      "Midnight Bloom is a sophisticated floral fragrance that captures the essence of a moonlit garden. The scent opens with fresh bergamot and delicate lily of the valley, leading to a heart of jasmine and rose. The base notes of amber, sandalwood, and vanilla create a warm, lingering finish that's both elegant and mysterious.",
    category: "Women",
    fragranceFamily: "Floral Oriental",
    concentration: "Eau de Parfum",
    launchYear: 2022,
    rating: 4.7,
    reviewCount: 42,
    sizes: [
      { label: "Small", value: 30 },
      { label: "Medium", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume1-1.jpg", "/images/perfume1-2.jpg", "/images/perfume1-3.jpg", "/images/perfume1-4.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Hydroxycitronellal, Citronellol, Coumarin, Geraniol, Citral, Benzyl Alcohol, Benzyl Benzoate, Farnesol, Eugenol, Isoeugenol, Benzyl Cinnamate, Cinnamyl Alcohol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Emily Johnson",
        rating: 5,
        comment:
          "This perfume is absolutely divine! The jasmine notes are prominent but not overwhelming, and the amber gives it such a warm, sophisticated finish. I've received so many compliments when wearing it.",
        date: "March 15, 2023",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Sophia Williams",
        rating: 4,
        comment:
          "Beautiful scent that lasts all day. The only reason I'm giving 4 stars instead of 5 is that the bottle design could be more elegant for the price point.",
        date: "April 2, 2023",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Ocean Depths",
    brand: "Aqua Fragrances",
    price: 89.99,
    shortDescription: "A fresh aquatic scent with hints of citrus and sea salt.",
    description:
      "Ocean Depths transports you to a serene coastal retreat with its invigorating blend of aquatic notes. This refreshing fragrance opens with zesty bergamot and lemon, followed by a heart of sea salt accord and lavender. Base notes of ambergris, cedar, and light musk create a clean, long-lasting finish that evokes the feeling of an ocean breeze.",
    category: "Men",
    fragranceFamily: "Aquatic Fresh",
    concentration: "Eau de Toilette",
    launchYear: 2021,
    rating: 4.5,
    reviewCount: 38,
    sizes: [
      { label: "Small", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume2-1.jpg", "/images/perfume2-2.jpg", "/images/perfume2-3.jpg"],
    ingredients:
      "Alcohol Denat., Aqua (Water), Parfum (Fragrance), Limonene, Linalool, Coumarin, Alpha-Isomethyl Ionone, Citral, Geraniol, Citronellol, Eugenol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Michael Chen",
        rating: 5,
        comment:
          "This has become my signature scent. It's fresh without being too sporty, and sophisticated without being heavy. Perfect for daily wear.",
        date: "January 10, 2023",
      },
      {
        _id: new ObjectId().toString(),
        userName: "James Wilson",
        rating: 4,
        comment: "Great everyday fragrance. Clean and fresh with good longevity. Would recommend for office wear.",
        date: "February 22, 2023",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Velvet Oud",
    brand: "Arabian Nights",
    price: 199.99,
    shortDescription: "A rich, opulent blend of oud, saffron, and rose.",
    description:
      "Velvet Oud is a luxurious oriental fragrance that celebrates the precious ingredients of the Middle East. This opulent scent begins with saffron and a touch of bergamot, leading to a heart of Bulgarian rose and patchouli. The base is dominated by rich agarwood (oud), complemented by vanilla, amber, and sandalwood for a deeply sensual experience that lasts for hours.",
    category: "Unisex",
    fragranceFamily: "Oriental Woody",
    concentration: "Parfum",
    launchYear: 2020,
    rating: 4.9,
    reviewCount: 56,
    sizes: [
      { label: "Small", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume3-1.jpg", "/images/perfume3-2.jpg", "/images/perfume3-3.jpg", "/images/perfume3-4.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Coumarin, Limonene, Eugenol, Citronellol, Geraniol, Cinnamal, Benzyl Benzoate, Farnesol, Benzyl Alcohol, Citral, Isoeugenol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Aisha Rahman",
        rating: 5,
        comment:
          "This is the most exquisite oud fragrance I've ever experienced. The rose and saffron complement the oud perfectly, creating a scent that's both traditional and modern. Worth every penny!",
        date: "December 5, 2022",
      },
      {
        _id: new ObjectId().toString(),
        userName: "David Thompson",
        rating: 5,
        comment:
          "An incredible fragrance with amazing projection and longevity. I applied it in the morning and could still smell it the next day. A true masterpiece.",
        date: "November 18, 2022",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Citrus Sunshine",
    brand: "Fresh Vibes",
    price: 69.99,
    shortDescription: "An energizing blend of citrus fruits and green notes.",
    description:
      "Citrus Sunshine is a vibrant, uplifting fragrance that captures the essence of a Mediterranean orchard on a warm summer day. This energizing scent opens with a burst of Sicilian lemon, grapefruit, and mandarin, leading to a heart of neroli and green tea. Base notes of white musk and cedarwood provide a clean, subtle foundation that allows the citrus notes to shine.",
    category: "Unisex",
    fragranceFamily: "Citrus Aromatic",
    concentration: "Eau de Toilette",
    launchYear: 2023,
    rating: 4.3,
    reviewCount: 27,
    sizes: [
      { label: "Small", value: 30 },
      { label: "Medium", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume4-1.jpg", "/images/perfume4-2.jpg", "/images/perfume4-3.jpg"],
    ingredients:
      "Alcohol Denat., Aqua (Water), Parfum (Fragrance), Limonene, Linalool, Citral, Geraniol, Citronellol, Farnesol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Lisa Martinez",
        rating: 4,
        comment:
          "Such a refreshing scent! Perfect for hot summer days when you want something light but still noticeable. My only complaint is that it doesn't last as long as I'd like.",
        date: "June 20, 2023",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Thomas Brown",
        rating: 5,
        comment:
          "This is my go-to fragrance for the gym and casual outings. It's invigorating and clean without being too sharp or synthetic like many citrus scents can be.",
        date: "July 5, 2023",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Vanilla Dreams",
    brand: "Sweet Sensations",
    price: 79.99,
    shortDescription: "A comforting blend of vanilla, tonka bean, and caramel.",
    description:
      "Vanilla Dreams is a deliciously comforting gourmand fragrance that wraps you in warmth and sweetness. This indulgent scent opens with a hint of bergamot and almond, leading to a heart of rich Madagascan vanilla and creamy tonka bean. Base notes of caramel, sandalwood, and musk create a long-lasting, cozy finish that's perfect for cooler weather and intimate occasions.",
    category: "Women",
    fragranceFamily: "Oriental Gourmand",
    concentration: "Eau de Parfum",
    launchYear: 2022,
    rating: 4.6,
    reviewCount: 33,
    sizes: [
      { label: "Small", value: 30 },
      { label: "Medium", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume5-1.jpg", "/images/perfume5-2.jpg", "/images/perfume5-3.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Coumarin, Linalool, Limonene, Benzyl Alcohol, Benzyl Benzoate, Citronellol, Geraniol, Cinnamal, Eugenol, Isoeugenol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Rachel Kim",
        rating: 5,
        comment:
          "This perfume is like a warm hug in a bottle! The vanilla is sophisticated rather than cloying, and the caramel adds just the right amount of sweetness. I get so many compliments when I wear this.",
        date: "October 12, 2022",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Emma Davis",
        rating: 4,
        comment:
          "A beautiful gourmand that isn't too childish or overpowering. Great for fall and winter. The only downside is that it becomes quite close to the skin after a few hours.",
        date: "November 30, 2022",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Forest Whisper",
    brand: "Woodland Essence",
    price: 109.99,
    shortDescription: "A green, woody fragrance with pine, moss, and earthy notes.",
    description:
      "Forest Whisper transports you to a serene woodland with its evocative blend of green and woody notes. This nature-inspired scent opens with fresh pine needles and crisp apple, leading to a heart of cedarwood and oakmoss. Base notes of vetiver, patchouli, and amber create a grounding, earthy finish that evokes the feeling of walking through a misty forest at dawn.",
    category: "Men",
    fragranceFamily: "Woody Aromatic",
    concentration: "Eau de Parfum",
    launchYear: 2021,
    rating: 4.4,
    reviewCount: 29,
    sizes: [
      { label: "Small", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume6-1.jpg", "/images/perfume6-2.jpg", "/images/perfume6-3.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Eugenol, Citral, Geraniol, Cinnamal, Citronellol, Benzyl Benzoate.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Daniel Clark",
        rating: 5,
        comment:
          "As someone who loves the outdoors, this fragrance is perfect. It genuinely captures the essence of a forest without smelling artificial. Great projection and longevity too.",
        date: "August 3, 2022",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Robert Johnson",
        rating: 4,
        comment:
          "A very unique scent in my collection. It's earthy and green but still refined enough for formal occasions. The dry down is particularly impressive.",
        date: "September 15, 2022",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Rose Noir",
    brand: "Floral Elegance",
    price: 149.99,
    shortDescription: "A sophisticated dark rose fragrance with oud and patchouli.",
    description:
      "Rose Noir is a sophisticated floral fragrance that reimagines the classic rose in a modern, mysterious light. This elegant scent opens with saffron and a hint of raspberry, leading to a heart of Damask rose and geranium. Base notes of oud, patchouli, and dark amber create a rich, intriguing finish that transforms the traditional rose into something unexpectedly sultry and complex.",
    category: "Women",
    fragranceFamily: "Floral Woody",
    concentration: "Parfum",
    launchYear: 2020,
    rating: 4.8,
    reviewCount: 45,
    sizes: [
      { label: "Small", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume7-1.jpg", "/images/perfume7-2.jpg", "/images/perfume7-3.jpg", "/images/perfume7-4.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Citronellol, Geraniol, Limonene, Eugenol, Farnesol, Benzyl Benzoate, Benzyl Alcohol, Citral, Isoeugenol.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Victoria Lee",
        rating: 5,
        comment:
          "This is not your grandmother's rose perfume! It's dark, sophisticated, and utterly captivating. The oud and patchouli transform the rose into something mysterious and addictive.",
        date: "February 14, 2023",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Olivia Taylor",
        rating: 5,
        comment:
          "I've never been a fan of rose fragrances until I tried Rose Noir. It's complex, elegant, and makes me feel powerful when I wear it. Worth every penny!",
        date: "March 22, 2023",
      },
    ],
  },
  {
    _id: new ObjectId(),
    name: "Amber Royale",
    brand: "Noble Scents",
    price: 179.99,
    shortDescription: "A luxurious amber fragrance with spices and precious woods.",
    description:
      "Amber Royale is a majestic oriental fragrance that celebrates the opulence of amber and precious resins. This regal scent opens with cardamom, cinnamon, and a touch of bergamot, leading to a heart of labdanum, frankincense, and myrrh. Base notes of amber, sandalwood, and vanilla create a warm, enveloping finish that lingers on the skin like liquid gold, making a statement of quiet luxury.",
    category: "Unisex",
    fragranceFamily: "Oriental Spicy",
    concentration: "Parfum",
    launchYear: 2019,
    rating: 4.9,
    reviewCount: 52,
    sizes: [
      { label: "Small", value: 50 },
      { label: "Large", value: 100 },
    ],
    images: ["/images/perfume8-1.jpg", "/images/perfume8-2.jpg", "/images/perfume8-3.jpg"],
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Coumarin, Linalool, Limonene, Eugenol, Cinnamal, Citronellol, Geraniol, Benzyl Benzoate, Benzyl Alcohol, Farnesol, Citral.",
    reviews: [
      {
        _id: new ObjectId().toString(),
        userName: "Alexander Wright",
        rating: 5,
        comment:
          "This is what I imagine royalty would have worn in ancient times. It's rich, complex, and makes you feel like nobility. The amber is perfectly balanced with the spices and resins.",
        date: "December 18, 2022",
      },
      {
        _id: new ObjectId().toString(),
        userName: "Sophia Garcia",
        rating: 5,
        comment:
          "A masterpiece of perfumery. The evolution of this fragrance throughout the day is fascinating - it keeps revealing new facets. Exceptional longevity and sillage.",
        date: "January 5, 2023",
      },
    ],
  },
]

// Sample images for the perfumes
const imageMapping = {
  "/images/perfume1-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume1-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume1-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume1-4.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume2-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume2-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume2-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume3-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume3-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume3-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume3-4.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume4-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume4-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume4-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume5-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume5-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume5-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume6-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume6-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume6-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume7-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume7-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume7-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume7-4.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume8-1.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume8-2.jpg": "/placeholder.svg?height=600&width=600",
  "/images/perfume8-3.jpg": "/placeholder.svg?height=600&width=600",
  "/images/hero-banner.jpg": "/placeholder.svg?height=1200&width=2000",
  "/images/new-arrivals.jpg": "/placeholder.svg?height=800&width=1200",
  "/images/logo.png": "/placeholder.svg?height=80&width=80",
  "/images/logo-white.png": "/placeholder.svg?height=80&width=80",
}

// Replace image paths with placeholder URLs
perfumeData.forEach((perfume) => {
  perfume.images = perfume.images.map((image) => imageMapping[image] || image)
})

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    // Check if collection already has data
    const count = await db.collection("perfumes").countDocuments()

    if (count === 0) {
      // Insert sample data
      await db.collection("perfumes").insertMany(perfumeData)
      return NextResponse.json({ success: true, message: "Database seeded successfully" })
    } else {
      return NextResponse.json({ success: true, message: "Database already contains data" })
    }
  } catch (error) {
    console.error("Failed to seed database:", error)
    return NextResponse.json({ success: false, message: "Failed to seed database" }, { status: 500 })
  }
}
