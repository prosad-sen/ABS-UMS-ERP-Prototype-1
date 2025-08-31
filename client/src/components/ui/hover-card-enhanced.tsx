import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"

const HoverCardEnhanced = HoverCardPrimitive.Root

const HoverCardEnhancedTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> & {
    hoverEffect?: boolean;
  }
>(({ className, children, hoverEffect = true, ...props }, ref) => (
  <HoverCardPrimitive.Trigger
    ref={ref}
    className={cn(
      hoverEffect && "transition-all duration-200 hover:scale-105 hover:shadow-lg transform-gpu",
      className
    )}
    {...props}
  >
    {children}
  </HoverCardPrimitive.Trigger>
))
HoverCardEnhancedTrigger.displayName = HoverCardPrimitive.Trigger.displayName

const HoverCardEnhancedContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
    animated?: boolean;
  }
>(({ className, align = "center", sideOffset = 4, animated = true, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      animated && "animate-in zoom-in-90 slide-in-from-bottom-2 duration-200",
      "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardEnhancedContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCardEnhanced, HoverCardEnhancedTrigger, HoverCardEnhancedContent }