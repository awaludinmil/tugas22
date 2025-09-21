'use client';

export default function Chart() {
  // Simple chart representation using CSS
  const data = [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 80];
  const maxValue = Math.max(...data);
  
  return (
    <div className="h-64 flex items-end justify-between space-x-1">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        return (
          <div
            key={index}
            className="bg-blue-500 rounded-t flex-1 hover:bg-blue-600 transition-colors"
            style={{ height: `${height}%` }}
            title={`Value: ${value}`}
          />
        );
      })}
    </div>
  );
}
