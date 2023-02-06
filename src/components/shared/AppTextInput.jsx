import React from "react";
import { TextInput } from "react-native";

const AppTextInput = React.forwardRef((props, ref) => {
  return (
    <TextInput
      ref={ref}
      placeholderTextColor="lightgray"
      cursorColor="black"
      {...props}
    />
  );
});

export default AppTextInput;
