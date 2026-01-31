import React from "react";
import "./List.scss";
import { Folder } from "lucide-react";

const List = () => {
  return (
    <>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Award</th>
              <th>Location</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tr className="row">
            <td className="f-td">
              <Folder className="f-i" />
              HackCBS 8.0
            </td>
            <td>2025-11-09</td>
            <td>Participant</td>
            <td>Delhi</td>
            <td>Red</td>
          </tr>
          <tr className="row">
            <td className="f-td">
              <Folder className="f-i" />
              Zinnovation 3.0
            </td>
            <td>2025-11-01</td>
            <td>Best Design</td>
            <td>Chandigarh</td>
            <td>Blue</td>
          </tr>
          <tr className="row">
            <td className="f-td">
              <Folder className="f-i" />
              Hack36{" "}
            </td>
            <td>2025-04-15</td>
            <td>Best Idea</td>
            <td>MNNIT Allahabad</td>
            <td>Green</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default List;
