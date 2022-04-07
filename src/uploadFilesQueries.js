import { gql } from "@apollo/client";

export const UPLOAD_COMPANY_LOGO = gql`
  mutation UploadCompanyLogo($id: Int!, $file: Upload!) {
    uploadCompanyLogo(id: $id, file: $file)
  }
`;

export const COMPANY_EMPLOYEE_UPLOAD = gql`
  mutation CompanyEmployeeUpload($companyId: Int!, $file: Upload!, $apply: Boolean!) {
    CompanyEmployeeUpload(companyId: $companyId, file: $file, apply: $apply) {
      companyId
    }
  }
`;


export const UPLOAD = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;