// import axios
import axios from "axios";
import { appsettings } from "../settings/appsettings";

const base = appsettings.apiBaseUrl;

export const CreateEmployee = async (e: any) => {
  // `${base}/Empleado/Create`
  try {
    console.log("e", e);
    const response = await axios.post(
      "http://localhost:5045/api/Empleado/Create ",
      e
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const EditEmploye = async (e: any) => {
  // `${base}/Empleado/Create`
  try {
    console.log("e", e.idEmpleado);
    const response = await axios.put(
      `http://localhost:5045/api/Empleado/Edit/${e.idEmpleado}`,
      e
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// getAll
export const GetAllEmployees = async () => {
  try {
    const response = await axios.get(`${base}/Empleado/list`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get by id
export const getById = async (id: string) => {
  try {
    const response = await axios.get(`${base}/Empleado/Get/${id}`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
