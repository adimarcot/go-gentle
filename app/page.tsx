"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ArrowRight, Wifi, Briefcase, Bath, Tv, WashingMachine, Snowflake, Car, Trees, Search } from "lucide-react"

const translations = {
  it: {
    logoText: "Porta Romana Luxury",
    contactBtn: "Contattami",
    heroSubtitle: "Milano • Porta Romana • Bocconi",
    heroTitle: "Eleganza Esclusiva nel Cuore di Milano",
    heroDescription:
      "Scopri questo raffinato appartamento situato in una delle zone più prestigiose di Milano. A soli 3 minuti a piedi dalla metropolitana, perfetto per chi cerca comfort e stile.",
    heroButton: "Scopri la Galleria",
    galleryTitle: "Galleria",
    gallerySubtitle: "Scopri gli spazi di questo esclusivo appartamento nel cuore di Milano",
    viewAllBtn: "Mostra tutte le 16 foto",
    amenitiesTitle: "Comfort & Servizi",
    amenity1Title: "Wi-Fi Alta Velocità",
    amenity1Desc: "Connessione internet veloce e affidabile",
    amenity2Title: "Spazio Lavoro",
    amenity2Desc: "Area dedicata per lavorare in smart working",
    amenity3Title: "Vasca Idromassaggio",
    amenity3Desc: "Relax con cromoterapia inclusa",
    amenity4Title: "Smart TV",
    amenity4Desc: "Intrattenimento moderno",
    amenity5Title: "Lavatrice",
    amenity5Desc: "A disposizione gratuita nell'appartamento",
    amenity6Title: "Aria Condizionata",
    amenity6Desc: "Clima perfetto tutto l'anno",
    amenity7Title: "Parcheggio",
    amenity7Desc: "Disponibile in loco a pagamento",
    amenity8Title: "Vista Cortile",
    amenity8Desc: "Tranquillità e silenzio",
    reviewsTitle: "Recensioni degli Ospiti",
    reviewsSubtitle: "Cosa dicono gli ospiti che hanno soggiornato qui",
    review1Text:
      "Federico è un host eccezionale, gentile e attento. E il suo appartamento, dotato di ogni comfort, è un vero gioiello! Tornerò sicuramente.",
    review2Text: "Tutto perfetto, Host molto gentile e premuroso.",
    review3Text: "Esperienza fantastica.",
    contactTitle: "Prenota il Tuo Soggiorno",
    contactText:
      "Interessato a questo splendido appartamento? Contattami su WhatsApp per maggiori informazioni, disponibilità e per organizzare una visita.",
    contactBtn2: "Contatta Federico",
    contactName: "Federico • +39 338 655 8551",
    footerText: "© 2026 Appartamento Milano Porta Romana. Tutti i diritti riservati.",
    whatsappMessage: "Ciao Federico, sono interessato all'appartamento a Milano Porta Romana. Vorrei maggiori informazioni.",
  },
  en: {
    logoText: "Porta Romana Luxury",
    contactBtn: "Contact Me",
    heroSubtitle: "Milan • Porta Romana • Bocconi",
    heroTitle: "Exclusive Elegance in the Heart of Milan",
    heroDescription:
      "Discover this refined apartment located in one of Milan's most prestigious areas. Just 3 minutes walk from the metro, perfect for those seeking comfort and style.",
    heroButton: "Discover the Gallery",
    galleryTitle: "Gallery",
    gallerySubtitle: "Explore the spaces of this exclusive apartment in the heart of Milan",
    viewAllBtn: "Show all 16 photos",
    amenitiesTitle: "Comfort & Amenities",
    amenity1Title: "High-Speed Wi-Fi",
    amenity1Desc: "Fast and reliable internet connection",
    amenity2Title: "Workspace",
    amenity2Desc: "Dedicated area for remote working",
    amenity3Title: "Hydromassage Tub",
    amenity3Desc: "Relaxation with chromotherapy included",
    amenity4Title: "Smart TV",
    amenity4Desc: "Modern entertainment",
    amenity5Title: "Washing Machine",
    amenity5Desc: "Free in the apartment",
    amenity6Title: "Air Conditioning",
    amenity6Desc: "Perfect climate all year round",
    amenity7Title: "Parking",
    amenity7Desc: "Available on-site for a fee",
    amenity8Title: "Courtyard View",
    amenity8Desc: "Peace and quiet",
    reviewsTitle: "Guest Reviews",
    reviewsSubtitle: "What our guests say about their stay",
    review1Text:
      "Federico is an exceptional host, kind and attentive. And his apartment, equipped with every comfort, is a true gem! I will definitely return.",
    review2Text: "Everything perfect, very kind and caring Host.",
    review3Text: "Fantastic experience.",
    contactTitle: "Book Your Stay",
    contactText:
      "Interested in this beautiful apartment? Contact me on WhatsApp for more information, availability, and to arrange a visit.",
    contactBtn2: "Contact Federico",
    contactName: "Federico • +39 338 655 8551",
    footerText: "© 2026 Porta Romana Milan Apartment. All rights reserved.",
    whatsappMessage: "Hi Federico, I'm interested in the apartment in Milan Porta Romana. I would like more information.",
  },
}

const galleryImages = [
  { src: "/foto-1.jpg.jpeg", alt: "Cucina moderna attrezzata" },
  { src: "/foto-2.jpg.jpeg", alt: "Zona living soppalcata" },
  { src: "/foto-3.jpg.avif", alt: "Camera da letto elegante" },
  { src: "/foto-4.jpg.jpeg", alt: "Bagno con vasca idromassaggio" },
  { src: "/foto-5.jpg.jpeg", alt: "Vista cortile interno" },
  { src: "/foto-6.jpg.jpeg", alt: "Dettagli dell'appartamento" },
  { src: "/foto-7.jpg.jpeg", alt: "Vista dell'appartamento" },
  { src: "/foto-8.jpg.jpeg", alt: "Dettagli interni" },
  { src: "/foto-9.jpg.jpeg", alt: "Spazi dell'appartamento" },
  { src: "/foto-10.jpg.jpeg", alt: "Ambiente dell'appartamento" },
  { src: "/foto-11.jpg.avif", alt: "Vista dell'appartamento" },
  { src: "/foto-12.jpg.jpeg", alt: "Dettagli dell'appartamento" },
  { src: "/foto-13.jpg.avif", alt: "Spazi dell'appartamento" },
  { src: "/foto-14.jpg.jpeg", alt: "Vista dell'appartamento" },
  { src: "/foto-15.jpg.avif", alt: "Ambiente dell'appartamento" },
  { src: "/foto-16.jpg.avif", alt: "Dettagli dell'appartamento" },
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
  const t = translations[lang]

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "it" | "en" | null
    if (savedLang && (savedLang === "it" || savedLang === "en")) {
      setLang(savedLang)
    }
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
    { text: t.review1Text, author: "Stefano" },
    { text: t.review2Text, author: "Paolo" },
    { text: t.review3Text, author: "Antonino" },
  ]

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2926] font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#faf8f5]/95 backdrop-blur-sm z-50 py-3 px-4 md:px-8 border-b border-[#c9a96e]/20 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-serif text-xl md:text-2xl font-semibold text-[#1a1614] tracking-wide">{t.logoText}</div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setLanguage("it")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  lang === "it" ? "bg-[#c9a96e] text-white" : "text-[#6b6560] hover:text-[#1a1614]"
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  lang === "en" ? "bg-[#c9a96e] text-white" : "text-[#6b6560] hover:text-[#1a1614]"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a96e] text-white rounded-full text-sm font-medium transition-all hover:bg-[#b89555] hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{t.contactBtn}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-20 min-h-[70vh] md:min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1614] to-[#2d2926]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><defs><pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'><path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(201,169,110,0.1)' stroke-width='1'/></pattern></defs><rect width='1200' height='800' fill='url(%23grid)'/></svg>")`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm md:text-base tracking-[3px] uppercase text-[#c9a96e] mb-4 font-medium">{t.heroSubtitle}</p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 text-balance">{t.heroTitle}</h1>
          <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto mb-8">{t.heroDescription}</p>
          <a
            href="#galleria"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-white rounded-full text-base font-medium transition-all hover:bg-[#b89555] hover:-translate-y-1 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("galleria")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t.heroButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto" id="galleria">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1614] mb-4">{t.galleryTitle}</h2>
          <p className="text-base md:text-lg text-[#6b6560] max-w-xl mx-auto">{t.gallerySubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Search className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1614] text-white rounded-full font-medium transition-all hover:bg-[#c9a96e] hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path d="M4 8h4M4 16h4M12 8h8M12 16h8" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {t.viewAllBtn}
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:bg-white/10 rounded-full p-2 transition-all hover:rotate-90"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={() => changeLightboxImage(-1)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-[#c9a96e] hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <div className="relative w-[80vw] h-[70vh] md:w-[70vw] md:h-[80vh]">
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
            <button
              onClick={() => changeLightboxImage(1)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-[#c9a96e] hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Amenities Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1614]">{t.amenitiesTitle}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 rounded-xl bg-[#faf8f5] border border-transparent transition-all hover:-translate-y-1 hover:border-[#e4d4b8] hover:shadow-lg"
              >
                <amenity.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-[#c9a96e]" />
                <h3 className="font-semibold text-sm md:text-base text-[#1a1614] mb-1">{amenity.title}</h3>
                <p className="text-[#6b6560] text-xs md:text-sm">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1614] mb-4">{t.reviewsTitle}</h2>
            <p className="text-base md:text-lg text-[#6b6560] max-w-xl mx-auto">{t.reviewsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative bg-white p-6 md:p-8 rounded-xl border border-[#c9a96e]/20 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[#c9a96e]"
              >
                <span className="absolute top-2 left-4 text-6xl text-[#c9a96e]/30 font-serif leading-none">"</span>
                <div className="text-lg mb-4 tracking-wider">{"⭐".repeat(5)}</div>
                <p className="text-[#2d2926] text-base leading-relaxed italic mb-4 relative z-10">{review.text}</p>
                <div className="text-sm text-[#6b6560]">
                  <strong className="text-[#1a1614] font-semibold">{review.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#1a1614] to-[#2d2926] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4">{t.contactTitle}</h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-8">{t.contactText}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-white rounded-full text-base font-medium transition-all hover:bg-[#b89555] hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {t.contactBtn2}
          </a>
          <p className="mt-6 text-[#e4d4b8] text-sm">{t.contactName}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1614] text-white/70 text-center py-6 px-4 text-sm">{t.footerText}</footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg z-50 transition-all hover:scale-110 animate-pulse"
        aria-label="Contattami su WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </a>
    </div>
  )
}
