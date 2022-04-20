import "./Flat.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
////////////////////////////////////////////
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

////////////////////////////////////////////

export const Flat = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(0);
  const [value, setValue] = useState("0");
  const [filter, setFilter] = useState("0");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      getData();
    }
  }, [value, filter, page]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getData = () => {
    try {
      fetch(
        `https://apartment-flat.herokuapp.com/flat/${filter}/${value}/?page=${page}&size=${4}`
      )
        .then((d) => d.json())
        .then((res) => {
          setData(res.flats);
          setLimit(res.totalPage);
          console.log(res.flats);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="flatDivMain">
      <div className="fdiv">
        <div className="box">
          <Box sx={{ m: 1, minWidth: 120 }} size="small">
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Flat</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filter}
                label="Age"
                onChange={handleValue}
              >
                <MenuItem value="0">Flat Number</MenuItem>
                <MenuItem value="1">Asc</MenuItem>
                <MenuItem value="-1">Dec</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="box">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Resident</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="Age"
                onChange={handleFilter}
              >
                <MenuItem value="0">Resident Type</MenuItem>
                <MenuItem value="Owner">Owner</MenuItem>
                <MenuItem value="Tenent">Tenant</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <Link className="flatadd" to={"/addflat"}>
          Add Flat
        </Link>
      </div>
      <div className="sdiv">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Block</StyledTableCell>
                <StyledTableCell align="center">Flat Number</StyledTableCell>
                <StyledTableCell align="center">Type</StyledTableCell>
                <StyledTableCell align="center">
                  No. of Residents
                </StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((e, id) => (
                <StyledTableRow key={e.i}>
                  <StyledTableCell align="center">{e.block}</StyledTableCell>
                  <StyledTableCell align="center">
                    {e.flat_number}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.type}</StyledTableCell>
                  <StyledTableCell align="center">
                    {e.residents}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link className="flatListLink" to={`/flat/${e._id}`}>
                      <td>
                        <img className="flatImg" src={e.image} alt="NA" />
                      </td>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack id="pagi">
          <Typography>Page: {page}</Typography>
          <Pagination
            count={10}
            page={page}
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </Stack>
      </div>
    </div>
  );
};
