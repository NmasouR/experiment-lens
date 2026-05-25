import logoUrl from "@/assets/logo.png";
import common from "@/content/common.json";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt={`${common.brand} logo`}
      className={`${className} object-contain`}
    />
  );
}
