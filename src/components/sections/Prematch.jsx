import { Table, TableCell, TableRow } from "@suid/material";
import Text from "../Text";
import PreloadChoice from "../multipleChoice/PreloadChoice";

const Prematch = () => {
    return (
        <div class="section">
            <h2>Pre-Match</h2>
            <Table>
                <TableRow>
                    <TableCell>
                        <Text key="initials" type="text" label="Initials" max="2" />
                    </TableCell>
                    <TableCell>
                        <Text key="matchnum" type="number" label="Match Number" max="3" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Text key="teamnum" type="number" label="Team Number" max="5" />
                    </TableCell>
                    <TableCell>
                        <PreloadChoice />
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
};

export default Prematch;
