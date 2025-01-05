import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SpeedometerProps {
  value: number; // 0-100
  label: string;
  className?: string;
  colorClass?: string;
}

export const Speedometer = ({
  value,
  label,
  className,
  colorClass = "text-primary",
}: SpeedometerProps) => {
  const [currentRotation, setCurrentRotation] = useState(0);
  
  // Convert value to rotation degrees (0-180 degrees)
  const targetRotation = (value / 100) * 180;

  useEffect(() => {
    setCurrentRotation(targetRotation);
  }, [value, targetRotation]);

  return (
    <div className={cn("relative w-full max-w-[200px] mx-auto", className)}>
      <div className="relative">
        {/* Speedometer background */}
        <div className="h-[100px] w-[200px] overflow-hidden relative">
          <div className="absolute inset-0 rounded-t-full bg-muted/30"></div>
        </div>
        
        {/* Needle */}
        <div 
          className="absolute left-1/2 bottom-0 h-[90px] w-1 origin-bottom transition-transform duration-1000"
          style={{ 
            transform: `translateX(-50%) rotate(${currentRotation}deg)`,
          }}
        >
          <div className={cn("w-1 h-full rounded-full shadow-lg", colorClass)}></div>
          <div className={cn("absolute -top-1 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full shadow-lg", colorClass)}></div>
        </div>
        
        {/* Tick marks */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="h-2 w-0.5 bg-muted-foreground/30"
              style={{
                transform: `rotate(${(i * 45)}deg) translateY(-40px)`,
                transformOrigin: 'bottom center'
              }}
            />
          ))}
        </div>
        
        {/* Value labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-sm text-muted-foreground">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
      
      {/* Current value and label */}
      <div className="text-center mt-4">
        <p className={cn("text-2xl font-bold", colorClass)}>{value}%</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
};