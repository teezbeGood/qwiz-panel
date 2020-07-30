import {TableHead} from "./TableHead";
import {TableRow} from "./TableRow";
import React from "react";

export const ScoreTable = ({commands}) => (
  <div className="table-responsive pt-5" style={{padding: '0 20px'}}>
      <table className="table table-hover">
          <thead>
          <TableHead/>
          </thead>
          <tbody>
          {commands.map((command) => {
                return <TableRow key={command.id} command={command}/>
            }
          )}
          </tbody>
      </table>
  </div>
)
