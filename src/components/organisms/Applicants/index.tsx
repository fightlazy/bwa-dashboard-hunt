import React, {FC} from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { JOB_APLICANTS_COLUMNS, JOB_APLICANTS_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({}) => {
    return (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
                {JOB_APLICANTS_COLUMNS.map((item: string, i:number) => (
                    <TableHead key={item + i}>{item}</TableHead>
                ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_APLICANTS_DATA.map((item: any, i: number) => (
                <TableRow key={item.name + i}>
                    <TableCell>
                        {item.name}
                    </TableCell>
                    <TableCell>
                        {item.appliedDate}
                    </TableCell>
                    <TableCell>
                       <ButtonActionTable url=""/>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
    )
};

export default Applicants;