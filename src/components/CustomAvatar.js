import { Avatar, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
}));
export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    fontWeight: "bold",
    border: "1px solid #eee",
    "&:first-of-type": {
      borderLeft: 0,
    },
    "&:last-of-type": {
      borderRight: 0,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
