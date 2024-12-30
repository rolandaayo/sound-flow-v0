import React from 'react'

export default function Body() {
  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Distribute Your Music Worldwide</h1>
          <p className="text-xl mb-8">Reach millions of listeners across all major streaming platforms</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p>Distribute your music to 150+ streaming platforms worldwide</p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Keep 100% Royalties</h3>
              <p>No hidden fees, keep all your earnings</p>
            </div>
            <div className="text-center p-6">
              <div className="text-purple-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p>Track your performance with detailed analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">$9.99<span className="text-sm">/month</span></p>
              <ul className="mb-6 space-y-2">
                <li>5 Releases per year</li>
                <li>Basic Analytics</li>
                <li>Standard Support</li>
              </ul>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
                Choose Plan
              </button>
            </div>
            <div className="border rounded-lg p-8 text-center bg-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$19.99<span className="text-sm">/month</span></p>
              <ul className="mb-6 space-y-2">
                <li>Unlimited Releases</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
              </ul>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-gray-100">
                Choose Plan
              </button>
            </div>
            <div className="border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Label</h3>
              <p className="text-4xl font-bold mb-6">$49.99<span className="text-sm">/month</span></p>
              <ul className="mb-6 space-y-2">
                <li>Multiple Artists</li>
                <li>Custom Analytics</li>
                <li>24/7 Support</li>
              </ul>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-32"
              ></textarea>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
