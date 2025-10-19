import React, { useState } from 'react';
// FIX: Corrected import of FACEBOOK_ICON as it was named incorrectly.
import { WhatsAppIcon, FACEBOOK_ICON, TwitterIcon, ClipboardCopyIcon } from './Icons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  raffleTitle: string;
  raffleUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, raffleTitle, raffleUrl }) => {
  const [copySuccess, setCopySuccess] = useState('');

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(raffleUrl).then(() => {
        setCopySuccess('Copiado!');
        setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
        setCopySuccess('Falhou em copiar');
        setTimeout(() => setCopySuccess(''), 2000);
    });
  };
  
  const encodedUrl = encodeURIComponent(raffleUrl);
  const encodedTitle = encodeURIComponent(`Participe da rifa: ${raffleTitle}!`);

  const shareOptions = [
    { name: 'WhatsApp', icon: <WhatsAppIcon className="h-6 w-6"/>, url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` },
    // FIX: Replaced the inline SVG with the imported FACEBOOK_ICON constant for consistency.
    { name: 'Facebook', icon: FACEBOOK_ICON, url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: 'Twitter', icon: <TwitterIcon className="h-6 w-6"/>, url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-2 text-gray-800">Compartilhar Rifa</h2>
        <p className="text-sm text-gray-600 mb-4 truncate">"{raffleTitle}"</p>
        
        <div className="flex items-center space-x-2">
            <input 
                type="text" 
                value={raffleUrl} 
                readOnly 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <button 
                onClick={copyToClipboard}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md relative"
                title="Copiar Link"
            >
                <ClipboardCopyIcon className="h-5 w-5 text-gray-700"/>
                {copySuccess && <span className="absolute -top-7 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">{copySuccess}</span>}
            </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
             <p className="text-sm text-center text-gray-500 mb-3">Ou compartilhe em suas redes</p>
             <div className="flex justify-center space-x-4">
                {shareOptions.map(opt => (
                     <a 
                        key={opt.name}
                        href={opt.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-800 transition-colors"
                        title={`Compartilhar no ${opt.name}`}
                     >
                        {opt.icon}
                     </a>
                ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default ShareModal;