import React from 'react'

const About = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 text-gray-900">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-orange-700 to-red-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          About Sri Mahalakshmi Temple
        </h1>
        <p className="mt-4 text-lg">
          Preserving Faith, Culture & Spiritual Heritage
        </p>
      </section>

      {/* HISTORY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-orange-700 mb-6">
          History of the Temple
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Sri Mahalakshmi Temple has stood as a symbol of devotion and cultural
          heritage for centuries. Established by devoted patrons and maintained
          by generations of trustees, the temple follows sacred traditions passed
          down through ancient scriptures and rituals.
        </p>
      </section>

      {/* SIGNIFICANCE */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Spiritual Significance
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The presiding deity, Goddess Mahalakshmi, is worshipped as the divine
            source of prosperity, wisdom, and harmony. Devotees believe that
            sincere prayers offered here bring peace of mind and blessings to
            families and communities.
          </p>
        </div>
      </section>

      {/* MANAGEMENT */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Temple Administration
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The temple is managed by a dedicated Temple Administration Committee
            under established guidelines. Daily rituals, festivals, and charitable
            activities are conducted with transparency, discipline, and devotion.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-orange-700 mb-6">
          Our Values
        </h2>
        <ul className="text-lg text-gray-700 space-y-3">
          <li>🕉 Preservation of ancient rituals and traditions</li>
          <li>🕉 Service to devotees with humility and respect</li>
          <li>🕉 Promotion of spiritual learning and culture</li>
          <li>🕉 Community welfare and Annadanam</li>
        </ul>
      </section>

      {/* FOOTER NOTE */}
      <footer className="bg-slate-800 text-slate-200 py-8 text-center">
        <p>© 2026 Sri Mahalakshmi Temple</p>
        <p className="text-sm mt-1">
          Official Temple Trust
        </p>
      </footer>

    </div>
  )
}

export default About
