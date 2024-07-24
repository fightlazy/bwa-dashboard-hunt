import React, { FC } from "react";

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
import { Applicant } from "@prisma/client";

interface ApplicantsProps {
  applicants: any;
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {JOB_APLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && (
          <>
            {applicants.map((item: any, i: number) => (
              <TableRow key={item.id + i}>
                <TableCell>{item.user.name}</TableCell>

                <TableCell>
                  <ButtonActionTable url="" />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default Applicants;
