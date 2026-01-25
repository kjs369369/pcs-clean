import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

const CopyButton = ({ textToCopy, className = "" }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      toast({
        title: "복사 완료!",
        description: "프롬프트가 클립보드에 복사되었습니다.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "복사 실패",
        description: "클립보드에 복사할 수 없습니다.",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider 
        bg-primary/10 text-primary border border-primary/30 rounded
        hover:bg-primary hover:text-primary-foreground 
        transition-all duration-200 ${className}`}
      aria-label="프롬프트 복사"
    >
      {isCopied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          복사됨
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          복사
        </>
      )}
    </button>
  );
};

export default CopyButton;
