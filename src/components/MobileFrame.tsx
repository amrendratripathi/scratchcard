import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="relative w-full flex justify-center">
      {/* Phone Frame */}
      <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[9/20] max-h-[85vh] bg-foreground/90 rounded-[36px] p-3 shadow-2xl">
        {/* Simple inner screen with a small notch camera */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden flex bg-[url('/phone.jpg')] bg-cover bg-top">
          {/* Notch / camera area */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
            <div className="flex items-center justify-center px-4 py-1 rounded-full bg-foreground/90 gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
              <div className="w-3 h-3 rounded-full bg-background" />
            </div>
          </div>

          {/* Screen content */}
          <div className="w-full h-full pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
