import { ChangeEvent, useEffect, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
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
  Table,
} from "reactstrap";
import {
  deleteById,
  GetAllEmployees,
  getById,
} from "../services/Employee.service";

const initialEmp = {
  idEmpleado: 0,
  nombre: "",
  correo: "",
  sueldo: 0,
};

export function ItemList() {
  const [employee, setEmployee] = useState<IEmployee[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await GetAllEmployees();
      setEmployee(employees);
      console.log(employees);
    };
    fetchEmployees();
  }, []);

  const Delete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
        // convert id into string
          await deleteById(id);
        } catch (error) {
          console.log("No fue posible");
        }
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
      }
    });
  };

  const goBack = async () => {
    navigate("/");
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-primary text-white">
        <h3 className="mb-0">List</h3>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col md={6}>
            <Link className="btn btn-success mb-3" to={"/NewEmploye"}>New </Link>
          </Col>
          <Col md={10}>
          <Table bordered responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Actions</th>
 
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((item)=>{
                        return(
                            <tr key={item.idEmpleado}>
                                <td>{item.nombre}</td>
                                <td>{item.correo}</td>
                                <td>{item.sueldo}</td>
                                <td>
                                    <Link to={`/EditEmployee/${item.idEmpleado}`} className="btn btn-primary me-2">Edit</Link>
                                    <Button color="danger" onClick={() => item.idEmpleado !== undefined && deleteById(item.idEmpleado)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

          </Table>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
          <Button color="secondary" onClick={goBack} className="me-2">
            Go back
          </Button>
          <Button color="primary" onClick={()=>{}}>
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
