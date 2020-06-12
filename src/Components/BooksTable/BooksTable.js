import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



const CellBooks = ({ cellkey, data, field }) => {
    if (field.data === 'titulo') {
        return (
            <TableCell key={cellkey}>
                <Typography variant='body2'>{data[field.data]}</Typography>
                <Typography variant='body2'>({data.isbn})</Typography>
            </TableCell>
        )
    }

    return (
        <TableCell><Typography variant='body2'>{data[field.data]}</Typography></TableCell>
    )
}

const CellDetails = ({ details, id, title }) => {
    if (!details) return null

    return (
        <TableCell>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    details(id)
                }}
            >
                Detalhes
            </Link>
        </TableCell>
    )
}

const TitleDetails = ({ details }) => {
    if (!details) return null

    return <TableCell>Ações</TableCell>
}

const BooksTable = props => {

    const { fields, data, details } = props;

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {fields.map(field => <TableCell key={field.title}>{field.title}</TableCell>)}
                        <TitleDetails details={details} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(data => (
                            <TableRow key={data.id}>
                                {fields.map(field => (<CellBooks key={data[field.data]} data={data} field={field} />))}
                                <CellDetails details={details} id={data.id} />
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BooksTable;
