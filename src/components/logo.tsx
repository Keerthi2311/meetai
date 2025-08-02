import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12", 
    lg: "h-16 w-16"
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 shadow-lg",
        sizeClasses[size]
      )}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1" />
          <path d="M3 12c-.552 0-1-.448-1-1s.448-1 1-1" />
          <path d="M12 21c0 .552-.448 1-1 1s-1-.448-1-1" />
          <path d="M12 3c0-.552-.448-1-1-1s-1 .448-1 1" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
      <span className={cn(
        "font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
        textSizes[size]
      )}>
        MeetAI
      </span>
    </div>
  );
}
