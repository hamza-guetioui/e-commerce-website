import React, { useState } from "react";


function useHandleCheck( initialValue: { id: string; name: string; }[] ) {
    const [value, setValue] = useState(initialValue);

  function handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, name: event.target.value };
      setValue((value) => [...value, obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id !== event.target.id));
    }
  }

  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, name: event.target.value };
      setValue([obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id === event.target.id));
    }
  }
  return [value ,handleCheckbox,handleRadio] as const
}

export default useHandleCheck