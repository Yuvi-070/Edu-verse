import React from "react";

export default function Table() {
  return (
    <div className="col-lg-6">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Table</div>
      <table className="table w-1/1">
        <thead>
          <tr>
            <th>Description</th>
            <th>Hour</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Design UX and UI</td>
            <td>14</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
