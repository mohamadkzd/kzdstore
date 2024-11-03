import { ComponentProps } from "react";

type TVariant = "primary" | "success" | "danger" | "secondary" | "warning";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};
const Button = ({ children, variant,style, ...rest }: TButton) => {
  console.log(checkVariant(variant));

  return <button {...rest} style={{borderRadius:"10px",padding:"5px 10px",...style,...checkVariant(variant)}}>{children}</button>;
};

function checkVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  }
   else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  }
   else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
   else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}

export default Button;
