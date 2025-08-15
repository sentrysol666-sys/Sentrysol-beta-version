import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWallet } from '@/contexts/WalletContext';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface WalletConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletConnectionModal: React.FC<WalletConnectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isWalletConnected, walletAddress } = useWallet();

  React.useEffect(() => {
    if (isWalletConnected) {
      onClose();
    }
  }, [isWalletConnected, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 border border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Connect Your Wallet
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-white/70 text-center">
            Connect your Solana wallet to start using SentrySol's advanced security features.
          </p>
          
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center">
              <WalletMultiButton className="!bg-white/10 !hover:bg-white/20 !text-white !border !border-white/20 !rounded-lg !px-6 !py-3 !text-base !font-medium" />
            </div>
            
            {isWalletConnected && walletAddress && (
              <div className="text-center space-y-2">
                <p className="text-green-400 text-sm">✓ Wallet Connected</p>
                <p className="text-white/60 text-xs font-mono">
                  {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                </p>
              </div>
            )}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-white/50 text-xs">
              Supported wallets: Phantom, Solflare, and more
            </p>
            <p className="text-white/40 text-xs">
              By connecting, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
