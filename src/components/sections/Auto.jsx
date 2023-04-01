import { Table, TableCell, TableRow } from "@suid/material";
import Number from "../Number";
import Toggle from "../Toggle";
import AutoPosChoice from "../multipleChoice/AutoPosChoice";

const Auto = () => {
    return (
        <div class="section">
            <h2 class="sectionTitle">Autonomous</h2>
            <div class="table">
                <Table>
                    <TableRow>
                        <Toggle key="mobility" label="Mobility" />
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Number key="autohighcone" label="High Cone" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="automidcone" label="Mid Cone" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="autolowcone" label="Low Cone" max="20" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Number key="autohighcube" label="High Cube" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="automidcube" label="Mid Cube" max="20" />
                        </TableCell>
                        <TableCell>
                            <Number key="autolowcube" label="Low Cube" max="20" />
                        </TableCell>
                    </TableRow>
                </Table>
                <AutoPosChoice />
            </div>
        </div>
    );
};

export default Auto;
