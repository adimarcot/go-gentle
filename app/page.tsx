"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Wifi, Briefcase, Bath, Tv, WashingMachine, Snowflake, Car, Trees, Star, MapPin, Phone } from "lucide-react"

const translations = {
  it: {
    logoText: "GO GENTLE",
    tagline: "Milano • Porta Romana",
    contactBtn: "Prenota Ora",
    heroSubtitle: "Appartamento Esclusivo",
    heroTitle: "PORTA ROMANA",
    heroDescription: "Un rifugio di eleganza nel cuore pulsante di Milano, dove il design contemporaneo incontra il comfort senza compromessi.",
    heroButton: "Esplora",
    galleryTitle: "La Residenza",
    gallerySubtitle: "Scopri ogni dettaglio di questo esclusivo appartamento milanese",
    viewAllBtn: "Vedi Tutte le Foto",
    amenitiesTitle: "Servizi",
    amenitiesSubtitle: "Ogni comfort per un soggiorno indimenticabile",
    amenity1Title: "Wi-Fi Premium",
    amenity1Desc: "Connessione ad alta velocità",
    amenity2Title: "Area Lavoro",
    amenity2Desc: "Spazio dedicato allo smart working",
    amenity3Title: "Spa Privata",
    amenity3Desc: "Vasca idromassaggio con cromoterapia",
    amenity4Title: "Smart TV",
    amenity4Desc: "Intrattenimento di ultima generazione",
    amenity5Title: "Lavatrice",
    amenity5Desc: "Servizio incluso",
    amenity6Title: "Clima",
    amenity6Desc: "Temperatura ideale tutto l'anno",
    amenity7Title: "Parcheggio",
    amenity7Desc: "Disponibile su richiesta",
    amenity8Title: "Vista Cortile",
    amenity8Desc: "Oasi di tranquillità",
    reviewsTitle: "Testimonianze",
    reviewsSubtitle: "L'esperienza dei nostri ospiti",
    review1Text: "Federico è un host eccezionale, gentile e attento. E il suo appartamento, dotato di ogni comfort, è un vero gioiello! Tornerò sicuramente.",
    review2Text: "Tutto perfetto, Host molto gentile e premuroso. L'appartamento è esattamente come nelle foto, pulitissimo e ben accessoriato.",
    review3Text: "Esperienza fantastica. Posizione strategica, appartamento curato nei minimi dettagli. Consigliatissimo!",
    contactTitle: "Inizia il Tuo Soggiorno",
    contactText: "Contattaci per informazioni sulla disponibilità e per prenotare la tua esperienza esclusiva a Milano.",
    contactBtn2: "Contatta Federico",
    contactName: "Federico",
    contactPhone: "+39 338 655 8551",
    footerText: "© 2026 Go Gentle Milano. Tutti i diritti riservati.",
    footerLocation: "Porta Romana, Milano, Italia",
    whatsappMessage: "Ciao Federico, sono interessato all'appartamento a Milano Porta Romana. Vorrei maggiori informazioni.",
  },
  en: {
    logoText: "GO GENTLE",
    tagline: "Milan • Porta Romana",
    contactBtn: "Book Now",
    heroSubtitle: "Exclusive Apartment",
    heroTitle: "PORTA ROMANA",
    heroDescription: "A haven of elegance in the beating heart of Milan, where contemporary design meets uncompromising comfort.",
    heroButton: "Explore",
    galleryTitle: "The Residence",
    gallerySubtitle: "Discover every detail of this exclusive Milanese apartment",
    viewAllBtn: "View All Photos",
    amenitiesTitle: "Amenities",
    amenitiesSubtitle: "Every comfort for an unforgettable stay",
    amenity1Title: "Premium Wi-Fi",
    amenity1Desc: "High-speed connection",
    amenity2Title: "Work Area",
    amenity2Desc: "Dedicated smart working space",
    amenity3Title: "Private Spa",
    amenity3Desc: "Hydromassage tub with chromotherapy",
    amenity4Title: "Smart TV",
    amenity4Desc: "Latest generation entertainment",
    amenity5Title: "Washer",
    amenity5Desc: "Service included",
    amenity6Title: "Climate",
    amenity6Desc: "Ideal temperature year-round",
    amenity7Title: "Parking",
    amenity7Desc: "Available on request",
    amenity8Title: "Courtyard View",
    amenity8Desc: "Oasis of tranquility",
    reviewsTitle: "Testimonials",
    reviewsSubtitle: "The experience of our guests",
    review1Text: "Federico is an exceptional host, kind and attentive. And his apartment, equipped with every comfort, is a true gem! I will definitely return.",
    review2Text: "Everything perfect, very kind and caring Host. The apartment is exactly as in the photos, very clean and well equipped.",
    review3Text: "Fantastic experience. Strategic location, apartment with attention to every detail. Highly recommended!",
    contactTitle: "Begin Your Stay",
    contactText: "Contact us for availability information and to book your exclusive experience in Milan.",
    contactBtn2: "Contact Federico",
    contactName: "Federico",
    contactPhone: "+39 338 655 8551",
    footerText: "© 2026 Go Gentle Milano. All rights reserved.",
    footerLocation: "Porta Romana, Milan, Italy",
    whatsappMessage: "Hi Federico, I'm interested in the apartment in Milan Porta Romana. I would like more information.",
  },
}

const galleryImages = [
  { src: "/foto-1.jpg.jpeg", alt: "Modern equipped kitchen" },
  { src: "/foto-2.jpg.jpeg", alt: "Mezzanine living area" },
  { src: "/foto-3.jpg.avif", alt: "Elegant bedroom" },
  { src: "/foto-4.jpg.jpeg", alt: "Bathroom with hydromassage tub" },
  { src: "/foto-5.jpg.jpeg", alt: "Internal courtyard view" },
  { src: "/foto-6.jpg.jpeg", alt: "Apartment details" },
  { src: "/foto-7.jpg.jpeg", alt: "Apartment view" },
  { src: "/foto-8.jpg.jpeg", alt: "Interior details" },
  { src: "/foto-9.jpg.jpeg", alt: "Apartment spaces" },
  { src: "/foto-10.jpg.jpeg", alt: "Apartment environment" },
  { src: "/foto-11.jpg.avif", alt: "Apartment view" },
  { src: "/foto-12.jpg.jpeg", alt: "Apartment details" },
  { src: "/foto-13.jpg.avif", alt: "Apartment spaces" },
  { src: "/foto-14.jpg.jpeg", alt: "Apartment view" },
  { src: "/foto-15.jpg.avif", alt: "Apartment environment" },
  { src: "/foto-16.jpg.avif", alt: "Apartment details" },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function HomePage() {
  const [lang, setLang] = useState<"it" | "en">("it")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "it" | "en" | null
    if (savedLang && (savedLang === "it" || savedLang === "en")) {
      setLang(savedLang)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setLanguage = (newLang: "it" | "en") => {
    setLang(newLang)
    localStorage.setItem("language", newLang)
  }

  const whatsappLink = `https://wa.me/393386558551?text=${encodeURIComponent(t.whatsappMessage)}`

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const changeLightboxImage = useCallback((direction: number) => {
    setCurrentImageIndex((prev) => {
      let newIndex = prev + direction
      if (newIndex < 0) newIndex = galleryImages.length - 1
      if (newIndex >= galleryImages.length) newIndex = 0
      return newIndex
    })
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowLeft") changeLightboxImage(-1)
        if (e.key === "ArrowRight") changeLightboxImage(1)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, changeLightboxImage])

  const amenities = [
    { icon: Wifi, title: t.amenity1Title, desc: t.amenity1Desc },
    { icon: Briefcase, title: t.amenity2Title, desc: t.amenity2Desc },
    { icon: Bath, title: t.amenity3Title, desc: t.amenity3Desc },
    { icon: Tv, title: t.amenity4Title, desc: t.amenity4Desc },
    { icon: WashingMachine, title: t.amenity5Title, desc: t.amenity5Desc },
    { icon: Snowflake, title: t.amenity6Title, desc: t.amenity6Desc },
    { icon: Car, title: t.amenity7Title, desc: t.amenity7Desc },
    { icon: Trees, title: t.amenity8Title, desc: t.amenity8Desc },
  ]

  const reviews = [
    { text: t.review1Text, author: "Stefano", date: "Gennaio 2026" },
    { text: t.review2Text, author: "Paolo", date: "Dicembre 2025" },
    { text: t.review3Text, author: "Antonino", date: "Novembre 2025" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex flex-col">
              <span className={`font-serif text-2xl tracking-[0.3em] font-light transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
                {t.logoText}
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                {t.tagline}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {/* Language Toggle */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("it")}
                  className={`px-2 py-1 text-xs tracking-wider transition-all ${
                    lang === "it" 
                      ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                      : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
                  }`}
                >
                  IT
                </button>
                <span className={scrolled ? "text-muted-foreground" : "text-white/40"}>|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 text-xs tracking-wider transition-all ${
                    lang === "en" 
                      ? scrolled ? "text-foreground font-medium" : "text-white font-medium"
                      : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs tracking-wider uppercase transition-all hover:bg-primary/90"
              >
                {t.contactBtn}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full viewport with large image */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/foto-2.jpg.jpeg"
            alt="Luxury apartment interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4">
              {t.heroSubtitle}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              {t.heroDescription}
            </p>
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-4 text-white text-sm tracking-[0.2em] uppercase hover:gap-6 transition-all"
            >
              <span>{t.heroButton}</span>
              <span className="w-12 h-px bg-white group-hover:w-16 transition-all" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
              {t.galleryTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Bento Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large featured image */}
            <div
              onClick={() => openLightbox(0)}
              className="col-span-2 row-span-2 relative aspect-square cursor-pointer group overflow-hidden"
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Smaller images */}
            {galleryImages.slice(1, 5).map((image, index) => (
              <div
                key={index + 1}
                onClick={() => openLightbox(index + 1)}
                className="relative aspect-square cursor-pointer group overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground text-sm tracking-[0.15em] uppercase transition-all hover:bg-foreground hover:text-background"
            >
              {t.viewAllBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => changeLightboxImage(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-[85vw] h-[75vh] md:w-[75vw] md:h-[85vh]">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <button
            onClick={() => changeLightboxImage(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Amenities Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
              {t.amenitiesTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.amenitiesSubtitle}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <amenity.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-medium text-sm tracking-wider uppercase mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
              {t.reviewsTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.reviewsSubtitle}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group p-8 border border-border hover:border-primary/40 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8 text-balance">
                  "{review.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-medium text-foreground">{review.author}</span>
                  <span className="text-muted-foreground text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/foto-3.jpg.avif"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t.contactTitle}
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              {t.contactText}
            </p>
            
            {/* Contact Card */}
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-white/10 backdrop-blur-sm">
              <div className="text-center">
                <p className="font-serif text-2xl mb-1">{t.contactName}</p>
                <p className="text-primary-foreground/70 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t.contactPhone}
                </p>
              </div>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase transition-all hover:bg-accent/90"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t.contactBtn2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-xl tracking-[0.3em] font-light mb-1">
                {t.logoText}
              </span>
              <span className="text-background/60 text-sm flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {t.footerLocation}
              </span>
            </div>
            
            <p className="text-background/60 text-sm">
              {t.footerText}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contact via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  )
}
