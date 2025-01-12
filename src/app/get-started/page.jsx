export default function GetStarted() {
  return (
    <div className="pt-[120px] px-5 lg:px-10 max-w-[1440px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to Sound Flow! Follow these simple steps to begin your journey:
        </p>
        <div className="grid gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">1. Create Your Account</h2>
            <p>Sign up for a free account to access all our basic features.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">2. Choose Your Plan</h2>
            <p>Select a plan that best suits your needs and creative goals.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">3. Start Creating</h2>
            <p>Jump into our intuitive interface and begin making music!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
