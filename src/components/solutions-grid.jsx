import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

export default function SolutionsGrid({ solutions }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Al kg/m2</TableCell>
                        <TableCell align="right">Total Glass Cost</TableCell>
                        <TableCell align="right">Number of Vertical Mullions</TableCell>
                        <TableCell align="right">Stack Height Coef</TableCell>
                        <TableCell align="right">Number of Transoms</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {solutions.map(row => (
                        <TableRow key={Math.random()}>
                            <TableCell component="th" scope="row">{row[0]}</TableCell>
                            <TableCell align="right">{row[1]}</TableCell>
                            <TableCell align="right">{row[2]}</TableCell>
                            <TableCell align="right">{row[3]}</TableCell>
                            <TableCell align="right">{row[4]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};
