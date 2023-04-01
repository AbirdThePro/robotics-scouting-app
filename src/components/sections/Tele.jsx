import { Table, TableCell, TableRow } from "@suid/material";
import Number from "../Number";

const Tele = () => {
    return (
        <div class="section">
            <h2 class="sectionTitle">Tele-operated</h2>
            <div class="table">
                <Table>
                    <TableRow>
                        <TableCell>
                            <Number key="telehighcone" label="High Cone" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telemidcone" label="Mid Cone" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telelowcone" label="Low Cone" max="20" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Number key="telehighconedrop" label="High Cone Drop" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telemidconedrop" label="Mid Cone Drop" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telelowconedrop" label="Low Cone Drop" max="20" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Number key="telehighcube" label="High Cube" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telemidcube" label="Mid Cube" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telelowcube" label="Low Cube" max="20" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Number key="telehighcubedrop" label="High Cube Drop" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telemidcubedrop" label="Mid Cube Drop" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="telelowcubedrop" label="Low Cube Drop" max="20" />
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        </div>
    );
};

export default Tele;
