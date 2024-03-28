import { RadioGroupItem, RadioGroup } from '../_components/ui/radio-group';
import { Label } from './ui/label';

export default function RadioGroupProduct() {
  return (
    <div className="grid gap-2">
      <Label className="text-base" htmlFor="grind">
        Volume
      </Label>
      <RadioGroup
        className="flex items-center gap-2"
        defaultValue="large"
        id="grind"
      >
        <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
          <RadioGroupItem id="grind-whole-bean" value="small" />
          SM
        </Label>
        <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
          <RadioGroupItem id="grind-drip" value="large" />L
          {'\n                      '}
        </Label>
        <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
          <RadioGroupItem id="grind-espresso" value="extraLarge" />
          XL
        </Label>
      </RadioGroup>
    </div>
  );
}
