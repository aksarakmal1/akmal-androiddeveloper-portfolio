import React from 'react';
import { Activity, BarChart3, Calendar, Heart, Trophy, Users } from 'lucide-react';

const FitTrack: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Fitness Journey</h1>
          <p className="text-xl text-gray-300 mb-8">Achieve your fitness goals with personalized tracking and analytics</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Activity className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Workout Tracking</h3>
            <p className="text-gray-400">Log and monitor your daily workouts with detailed analytics</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Heart className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Metrics</h3>
            <p className="text-gray-400">Track vital health metrics and see your progress over time</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <BarChart3 className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
            <p className="text-gray-400">Visualize your fitness journey with detailed charts and insights</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Calendar className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Workout Planning</h3>
            <p className="text-gray-400">Create and customize your workout schedules</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Users className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-400">Connect with like-minded fitness enthusiasts</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Trophy className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Goal Achievement</h3>
            <p className="text-gray-400">Set and track your fitness goals with milestone rewards</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-6">Join thousands of users who have transformed their lives with FitTrack</p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitTrack;