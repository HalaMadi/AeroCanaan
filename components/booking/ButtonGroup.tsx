import { Button } from '@/components/ui/button';
interface ButtonGroupProps {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ handleNextStep, handlePreviousStep }) => {
    return (
      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePreviousStep}>
          Back
        </Button>
        <Button onClick={handleNextStep} className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
          Continue
        </Button>
      </div>
    );
  };
  
  export default ButtonGroup;
  