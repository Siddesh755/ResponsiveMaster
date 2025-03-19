export default function ResponsiveGrid() {
    return (
      <section className="p-8">
        <h3 className="text-2xl font-bold text-center mb-6">Responsive Grid</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow text-center">
              <p>Item {i + 1}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  