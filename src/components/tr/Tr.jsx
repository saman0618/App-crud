import React from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDeleteAppMutation } from "../../services/AplicationApi";
import { Navigate, useNavigate } from "react-router-dom";

function Tr({ id, name, surname, email, tel, aim }) {
  const navigate = useNavigate();
  const [deleteApp] = useDeleteAppMutation();
  const handleDeleteApp = (e) => {
    deleteApp(id);
  };
  const editBtn = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{aim}</td>
      <td>
        <button onClick={editBtn}>
          <TbEdit />
        </button>
        <button onClick={handleDeleteApp}>
          <RiDeleteBin2Line />
        </button>
      </td>
    </>
  );
}

export default Tr;
