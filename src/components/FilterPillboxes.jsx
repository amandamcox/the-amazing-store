import React from "react";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";

const FilterPillboxes = ({ filterName, filterValue, onDelete }) => {
  const userFacingFilterNames = {
    minPrice: "Min Price",
    maxPrice: "Max Price",
    query: "Name Search",
  };

  return (
    <Chip
      size="small"
      label={`${userFacingFilterNames[filterName]}: ${filterValue}`}
      onDelete={onDelete}
      color="secondary"
      deleteIcon={<CloseIcon />}
      style={{ marginRight: 10, marginBottom: 10 }}
    />
  );
};

export default FilterPillboxes;
