const GridBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Large faint grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-70
        "
      />

      {/* Fade the grid toward the edges */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0.9)_75%,#ffffff_100%)]
        "
      />

      {/* Page content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;