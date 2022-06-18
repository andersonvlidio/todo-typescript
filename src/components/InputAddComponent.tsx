import React, { FC, useState } from "react";

interface InputAddComponentProps {
  buttonName: string;
  name: string;
  placeholder: string;
  onClickAdd: () => void;
  onChangeTaskName: (name: string) => void;
}

const InputAddComponent: FC<InputAddComponentProps> = (props): JSX.Element => {
  const { name, buttonName, placeholder, onClickAdd, onChangeTaskName } = props;

  return (
    <div>
      <input
        onChange={(e) => onChangeTaskName(e.target.value)}
        value={name}
        type="text"
        placeholder={placeholder}
      />
      <button onClick={() => onClickAdd()}>{buttonName}</button>
    </div>
  );
};

export default InputAddComponent;
