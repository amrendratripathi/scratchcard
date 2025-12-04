import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { closeModal, revealCard } from '@/store/scratchCardSlice';
import { X, Copy } from 'lucide-react';
import { toast } from 'sonner';
import ScratchCard from './ScratchCard';

const ScratchCardModal = () => {
  const dispatch = useDispatch();
  const { isOpen, isRevealed, couponCode, discount, freeGift, brandName } = useSelector(
    (state: RootState) => state.scratchCard
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    toast.success('Coupon code copied!');
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleReveal = () => {
    dispatch(revealCard());
    toast.success('Congratulations! 🎉');
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-overlay flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl p-6 w-full max-w-[280px] relative shadow-card animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Header */}
        <p className="text-center text-muted-foreground text-xs mb-3">
          Yay! You've won a scratch card
        </p>

        {/* Scratch Area */}
        <div className="flex justify-center mb-4">
          <ScratchCard width={240} height={160} onComplete={handleReveal}>
            <div className="text-center p-4 bg-secondary rounded-lg w-full h-full flex flex-col items-center justify-center">
              {/* Brand Logo */}
              <h1 className="font-brand text-3xl tracking-wide text-foreground mb-2">
                {brandName}
                <span className="text-sm align-super">Co.</span>
              </h1>
              {/* Discount Info */}
              <h2 className="text-xl font-semibold text-foreground">{discount}</h2>
              <p className="text-muted-foreground text-xs">{freeGift}</p>
            </div>
          </ScratchCard>
        </div>

        {/* Coupon Code Box - Only visible when revealed */}
        {isRevealed && (
          <div className="animate-scale-in">
            <div className="border-2 border-dashed border-border rounded-lg p-3 flex items-center justify-between mb-3">
              <span className="font-mono text-base font-semibold text-foreground tracking-wider">
                {couponCode}
              </span>
              <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Claim Button */}
            <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-3">
              Claim Now
            </button>
          </div>
        )}

        {/* Terms */}
        <p className="text-center text-muted-foreground text-[10px] underline cursor-pointer hover:text-foreground transition-colors">
          Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default ScratchCardModal;
