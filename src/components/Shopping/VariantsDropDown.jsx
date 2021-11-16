import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

export const VariantsDropDown = ({ variants, selectOption, setSelectOption }) => {

  const variants2 = variants.map((variant, index) => {
    return {
      value: index,
      label: `${variant.price} € ${variant.duration} Tage `,
    };
  });

  return (
    <DropDownList>
      <Select
        placeholder="Leistungsdauer"
        options={variants2}
        value={selectOption}
        onChange={setSelectOption}
      ></Select>
    </DropDownList>
  );
};

const DropDownList = styled.div`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: black;
`;

const MenuItem = styled.li``;

const InputLabel = styled.li``;
