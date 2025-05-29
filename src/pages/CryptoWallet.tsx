import React from 'react';

const CryptoWallet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Crypto Wallet Project</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <p className="text-gray-300">
              A secure and user-friendly cryptocurrency wallet application enabling users to manage, 
              send, and receive various digital currencies while maintaining complete control over 
              their private keys.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Multi-currency support for major cryptocurrencies</li>
                <li>Real-time price tracking and portfolio analytics</li>
                <li>Secure key storage and encryption</li>
                <li>Transaction history and reporting</li>
                <li>QR code support for easy transfers</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Technical Details</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies Used</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>React with TypeScript</li>
                <li>Web3.js for blockchain interaction</li>
                <li>End-to-end encryption for security</li>
                <li>Real-time market data integration</li>
                <li>Responsive design with Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoWallet;