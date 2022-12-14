import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const EditEmployeeData = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  // console.log(editFormData);
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Department name"
          name="department"
          value={editFormData.department}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          name="isAdmin"
          onChange={handleEditFormChange}
          value={editFormData.isAdmin}
          className="select select-bordered select-md mx-2 max-w-xs"
        >
          <option disabled>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </td>
      <td>
        <button type="submit" className="mr-5">
          <IoMdCheckmark />
        </button>
        <button type="button" onClick={handleCancelClick}>
          <IoMdClose />
        </button>
      </td>
    </tr>
  );
};

export default EditEmployeeData;
