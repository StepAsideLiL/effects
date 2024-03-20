"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const FullscreenDialog = DialogPrimitive.Root;

const FullscreenDialogTrigger = DialogPrimitive.Trigger;

const FullscreenDialogPortal = DialogPrimitive.Portal;

const FullscreenDialogClose = DialogPrimitive.Close;

const FullscreenDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <FullscreenDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 h-full w-full overflow-auto border-4 border-muted-foreground bg-background p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </FullscreenDialogPortal>
));
FullscreenDialogContent.displayName = DialogPrimitive.Content.displayName;

const FullscreenDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
FullscreenDialogHeader.displayName = "DialogHeader";

const FullscreenDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
FullscreenDialogFooter.displayName = "DialogFooter";

const FullscreenDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
FullscreenDialogTitle.displayName = DialogPrimitive.Title.displayName;

const FullscreenDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FullscreenDialogDescription.displayName =
  DialogPrimitive.Description.displayName;

export {
  FullscreenDialog,
  FullscreenDialogPortal,
  FullscreenDialogClose,
  FullscreenDialogTrigger,
  FullscreenDialogContent,
  FullscreenDialogHeader,
  FullscreenDialogFooter,
  FullscreenDialogTitle,
  FullscreenDialogDescription,
};
