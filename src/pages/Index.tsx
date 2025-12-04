import { useCallback } from 'react';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import MobileFrame from '@/components/MobileFrame';
import ScratchCard from '@/components/ScratchCard';

const COUPON_CODE = 'APPVERSAL2025';

const Index = () => {
  const handleCopy = useCallback(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(COUPON_CODE)
        .then(() => toast.success('Coupon code copied!'))
        .catch(() => toast.error('Unable to copy the code.'));
    } else {
      toast.error('Copy is not supported in this browser.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-background to-rose-50 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
        Appversal Scratch Card
      </h1>

      <MobileFrame>
        {/* Simple mobile screen with a single vertical scratch card */}
        <div className="h-full flex items-center justify-center p-4">
          <ScratchCard width={230} height={320}>
            <div className="w-full h-full flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-rose-50 via-secondary to-rose-100 px-4 py-6 text-center border border-rose-100/60 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  🎉 Congratulations! 🎉
                </h2>
                <p className="text-sm text-muted-foreground">
                  You&apos;ve been selected to 
                  <span className="font-semibold text-foreground"> Appversal</span>.
                </p>
              </div>

              <div className="w-full space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Your Appversal launch coupon
                </p>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-background/80 border border-border px-3 py-3">
                  <span className="font-mono text-base font-semibold tracking-wide">
                    {COUPON_CODE}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 rounded-lg bg-primary text-primary-foreground px-4 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    Copy code
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Use this code when you onboard with Appversal to unlock a special
                  surprise.
                </p>
              </div>
            </div>
          </ScratchCard>
        </div>
      </MobileFrame>
    </div>
  );
};

export default Index;
