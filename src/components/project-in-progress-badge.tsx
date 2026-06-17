type ProjectInProgressBadgeProps = {
  isCompleted: boolean;
};

export default function ProjectInProgressBadge({
  isCompleted,
}: ProjectInProgressBadgeProps) {
  if (isCompleted) return null;

  return (
    <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full border border-accent/40 bg-black/60 backdrop-blur-sm text-[10px] md:text-xs uppercase tracking-widest text-accent font-mono font-bold">
      In Progress
    </span>
  );
}
