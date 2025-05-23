// pages/Dashboard.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">SkillSwap Dashboard</h1>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <div className="flex items-center space-x-3">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-700">Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.iconBg}`}>{stat.icon}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Learning Tab */}
        {activeTab === 'learning' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Received Services</h2>
            <ul className="space-y-4">
              <li className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-bold text-gray-800">Language Tutoring - French</h3>
                <p className="text-sm text-gray-600">Provider: Carlos Rodriguez | Status: Completed | Credits Used: 1</p>
              </li>
              <li className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-bold text-gray-800">Home Plumbing Help</h3>
                <p className="text-sm text-gray-600">Provider: Mike Wilson | Status: Scheduled | Credits Used: 1</p>
              </li>
            </ul>
          </div>
        )}

        {/* Teaching Tab */}
        {activeTab === 'teaching' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Provided Services</h2>
            <ul className="space-y-4">
              <li className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-bold text-gray-800">Baking Basics</h3>
                <p className="text-sm text-gray-600">Receiver: Mike Wilson | Status: Completed | Credits Earned: 1</p>
              </li>
              <li className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-bold text-gray-800">Basic Electrical Repairs</h3>
                <p className="text-sm text-gray-600">Receiver: Carlos Rodriguez | Status: Upcoming | Credits to Earn: 1</p>
              </li>
            </ul>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Time-Banking Summary</h2>
            <p className="text-sm text-gray-600 mb-2">Total Time Credits Earned: <span className="font-bold">35</span></p>
            <p className="text-sm text-gray-600 mb-2">Total Credits Spent: <span className="font-bold">12</span></p>
            <p className="text-sm text-gray-600 mb-2">Balance: <span className="font-bold">23</span></p>
            <p className="text-sm text-gray-600">Note: 1 hour = 1 time credit, irrespective of the skill/service type.</p>
          </div>
        )}
      </main>

      {/* Notifications Panel */}
      <AnimatePresence>
        {isNotificationOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-16 right-4 w-80 bg-white rounded-xl shadow-lg z-50"
          >
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${notification.iconBg}`}>{notification.icon}</div>
                    <div>
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const stats = [
  { label: 'Skills Shared', value: '12', icon: '🔧', iconBg: 'bg-blue-100' },
  { label: 'Time Credits Earned', value: '35', icon: '⏳', iconBg: 'bg-green-100' },
  { label: 'Sessions Completed', value: '20', icon: '📆', iconBg: 'bg-yellow-100' },
  { label: 'Community Rating', value: '4.8 ★', icon: '🌟', iconBg: 'bg-purple-100' }
];

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'learning', name: 'Received Services' },
  { id: 'teaching', name: 'Provided Services' },
  { id: 'earnings', name: 'Time-Banking' },
];

const notifications = [
  { message: 'New request for Language Tutoring', time: '5 minutes ago', icon: '📩', iconBg: 'bg-blue-100' },
  { message: 'You earned 1 credit from a session', time: '1 hour ago', icon: '🕒', iconBg: 'bg-green-100' },
  { message: 'You received a new review', time: '2 hours ago', icon: '🌟', iconBg: 'bg-yellow-100' }
];

export default Dashboard;
