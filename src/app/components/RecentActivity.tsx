'use client';

export default function RecentActivity() {
  const activities = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Order #1234 completed', time: '5 minutes ago', type: 'order' },
    { id: 3, action: 'Payment received', time: '10 minutes ago', type: 'payment' },
    { id: 4, action: 'System backup completed', time: '1 hour ago', type: 'system' },
    { id: 5, action: 'New product added', time: '2 hours ago', type: 'product' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'user': return '👤';
      case 'order': return '📦';
      case 'payment': return '💳';
      case 'system': return '⚙️';
      case 'product': return '📦';
      default: return '📄';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-sm">{getIcon(activity.type)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
