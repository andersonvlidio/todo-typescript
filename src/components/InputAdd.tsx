import React, { FC, useState } from "react";

interface InputAddProps {
  buttonName: string;
  placeholder: string;
  onClickAdd: (name: string) => void;
}

const InputAdd: FC<InputAddProps> = (props) => {
  const { buttonName, placeholder, onClickAdd } = props;
  const [name, setName] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleOnClick = () => {
    onClickAdd(name);
    setName("");
  };
  return (
    <div>
      <input
        onChange={(e) => handleOnChange(e)}
        value={name}
        type="text"
        placeholder={placeholder}
      />
      <button onClick={() => handleOnClick()}>{buttonName}</button>
    </div>
  );
};

export default InputAdd;
