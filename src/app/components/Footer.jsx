import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-4">SoundFlow</h3>
            <p className="text-gray-600">Your one-stop platform for global music distribution and analytics.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600">Features</a></li>
              <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-600 hover:text-purple-700">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700">
                <span className="text-2xl">💬</span>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700">
                <span className="text-2xl">📧</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} Music Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}