const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-surface gap-6">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-0 rounded-full border-t-2 border-purple animate-spin" />
    </div>
    <div className="text-xs tracking-[0.35em] uppercase text-ink">Yacht Way</div>
  </div>
)

export default Loader
