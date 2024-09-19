import { ChangeEvent, useEffect, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmployee } from "../interface/IEMployee";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";


const initialEmp = {
    idEmpleado: 0,
    nombre: "",
    correo: "",
    sueldo: 0,
  };
  

export function ItemList(){



    return (
        <div>
            <h1>Items List..</h1>
           
        </div>
    )
}