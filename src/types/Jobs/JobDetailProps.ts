import { Company } from "../CompanyTypes/Company";
import { RequisitionProps } from "../CompanyTypes/RequisitionProps";

export interface JobDetailProp extends RequisitionProps {
  company: Company;
  minCGPA: number;
}
