import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MockWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function MockWindow({ children, className, title }: MockWindowProps) {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden border border-white/10 bg-card shadow-2xl",
      className
    )}>
      {/* Window Header */}
      <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        {title && (
          <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground">
            {title}
          </div>
        )}
      </div>
      {/* Window Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
