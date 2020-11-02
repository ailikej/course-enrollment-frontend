import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// Mock data for display usage only
const courses = [
    {
        "courseName": "Omnis culpa sunt",
        "courseLocation": "Suite 976",
        "courseContent": "Suscipit rerum qui reiciendis temporibus necessitatibus.",
        "teacherId": 59
    },
    {
        "courseName": "Sed incidunt numquam",
        "courseLocation": "Apt. 657",
        "courseContent": "Dolor veritatis corporis nesciunt consectetur eaque quasi architecto ullam.",
        "teacherId": 78
    },
    {
        "courseName": "Tempore illum accusantium",
        "courseLocation": "Suite 082",
        "courseContent": "Asperiores in et eum.",
        "teacherId": 35
    },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// 把大象拉回来
export default function CourseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Course Name</StyledTableCell>
            <StyledTableCell align="right">Course Content</StyledTableCell>
            <StyledTableCell align="right">Course Location</StyledTableCell>
            <StyledTableCell align="right">Teacher Id</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {convertCourses(props.courses)}
        </TableBody>
      </Table>
    </TableContainer>
  );

  function convertCourses(courses) {
      return courses.map((course, i) => (
        <StyledTableRow key={course.courseName + course.teacherId}>
          <StyledTableCell component="th" scope="row">
            {i + 1}
          </StyledTableCell>
          <StyledTableCell align="right">{course.courseName}</StyledTableCell>
          <StyledTableCell align="right">{course.courseContent}</StyledTableCell>
          <StyledTableCell align="right">{course.courseLocation}</StyledTableCell>
          <StyledTableCell align="right">{course.teacherId}</StyledTableCell>
          <StyledTableCell align="right">
              <Button onClick={()=> props.handleActionButtonClick(course)}
                      variant="contained"
                      color="primary">
                  {props.actionButtonLabel}
              </Button>
          </StyledTableCell>
        </StyledTableRow>
      ));
  }
}
