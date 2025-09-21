'use client';

import { useState } from 'react';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const periods = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
  ];

  const analyticsData = [
    { metric: 'Page Views', value: '45,231', change: '+12.5%', trend: 'up' },
    { metric: 'Unique Visitors', value: '12,543', change: '+8.2%', trend: 'up' },
    { metric: 'Bounce Rate', value: '34.2%', change: '-2.1%', trend: 'down' },
    { metric: 'Avg. Session Duration', value: '3m 24s', change: '+15.3%', trend: 'up' },
    { metric: 'Conversion Rate', value: '2.8%', change: '+0.5%', trend: 'up' },
    { metric: 'Revenue per Visitor', value: '$3.61', change: '+7.2%', trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Period Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="mt-4 sm:mt-0">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {periods.map((period) => (
              <button
                key={period.value}
                onClick={() => setSelectedPeriod(period.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedPeriod === period.value
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyticsData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{item.metric}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{item.value}</p>
              </div>
              <div className={`flex items-center text-sm font-medium ${
                item.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="mr-1">
                  {item.trend === 'up' ? '↗' : '↘'}
                </span>
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Overview</h3>
          <div className="h-64 flex items-end justify-between space-x-1">
            {[65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 80].map((value, index) => {
              const height = (value / 100) * 100;
              return (
                <div
                  key={index}
                  className="bg-blue-500 rounded-t flex-1 hover:bg-blue-600 transition-colors"
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
          <div className="space-y-4">
            {[
              { device: 'Desktop', percentage: 45, color: 'bg-blue-500' },
              { device: 'Mobile', percentage: 35, color: 'bg-green-500' },
              { device: 'Tablet', percentage: 20, color: 'bg-purple-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{item.device}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unique Visitors
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bounce Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { page: '/dashboard', views: '12,543', visitors: '8,234', bounce: '23.4%' },
                { page: '/products', views: '9,876', visitors: '6,543', bounce: '31.2%' },
                { page: '/about', views: '7,654', visitors: '5,432', bounce: '28.7%' },
                { page: '/contact', views: '5,432', visitors: '3,876', bounce: '35.1%' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.page}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.visitors}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.bounce}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
