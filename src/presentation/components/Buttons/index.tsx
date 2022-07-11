import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  text: string;
  classname?: any;
  variant?: "solid" | "ghost" | "outline";
  onClick?: () => {};
}

const Buttons = ({
  text,
  classname,
  onClick,
  variant = "solid",
}: ButtonProps) => {
  return (
    <Button
      size={"md"}
      colorScheme="blue"
      variant={variant}
      className={`${classname} bg-primary`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Buttons;
