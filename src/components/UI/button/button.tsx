import { ButtonHTMLAttributes } from "react";
import { BasicButton, BigButton, SmallButton } from "./button.styles";
import { BUTTON_VARIATIONS } from "./buttonVariations";

type Props = {
  variation?: BUTTON_VARIATIONS;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (type = BUTTON_VARIATIONS.basic) =>
  ({
    [BUTTON_VARIATIONS.basic]: BasicButton,
    [BUTTON_VARIATIONS.big]: BigButton,
    [BUTTON_VARIATIONS.small]: SmallButton,
  }[type]);

const StyledButton = ({ children, variation, ...otherProps }: Props) => {
  const StyledButton = getButton(variation);
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default StyledButton;
