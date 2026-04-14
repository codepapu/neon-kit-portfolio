type MockCardProps = {
  className?: string;
  tone?: "light" | "muted";
};

export function MockCard({ className = "", tone = "light" }: MockCardProps) {
  const bg =
    tone === "light"
      ? "border-zinc-700/60 bg-zinc-900/95"
      : "border-zinc-700/50 bg-zinc-900/80";
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50 ring-1 ring-inset ring-white/[0.03] ${bg} ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-black/20 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
      </div>
      <div className="space-y-3 p-4">
        <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-zinc-600 to-zinc-700" />
        <div className="h-2 w-full rounded-full bg-zinc-700/90" />
        <div className="h-2 w-5/6 rounded-full bg-zinc-700/90" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-xl bg-gradient-to-br from-violet-500/25 to-fuchsia-600/15" />
          <div className="h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/15" />
        </div>
      </div>
    </div>
  );
}
