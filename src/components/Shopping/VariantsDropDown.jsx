import styled from "styled-components";
import Select from "react-select";

const euroFormatter = new Intl.NumberFormat("de-de", {
  style: "currency",
  currency: "EUR",
});

export const VariantsDropDown = ({
  variants,
  selectOption,
  setSelectOption,
}) => {
  const options = variants.map((variant, index) => {
    return {
      value: index,
      label: `${euroFormatter.format(variant.price)} ${variant.duration} Tage `,
    };
  });

  return (
    <DropDownList>
      <Select
        placeholder="Leistungsdauer"
        options={options}
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
