import { gql } from "@apollo/client";

export const UPLOAD_COMPANY_LOGO = gql`
  mutation UploadCompanyLogo($id: Int!, $file: Upload!) {
    uploadCompanyLogo(id: $id, file: $file)
  }
`;

export const COMPANY_EMPLOYEE_UPLOAD = gql`
  mutation CompanyEmployeeFileUpload(
    $args: CompanyEmployeeFileUploadArgs!
    $apply: Boolean!
    $file: Upload!
  ) {
    CompanyEmployeeFileUpload(
      args: $args
      apply: $apply
      file: $file
    ) {
      companyId
    }
  }
`;


export const COMPANY_CALIBRATION_UPLOAD2 = gql`
mutation CalibrationFileUpload (
  $args: CalibrationFileUploadArgs!
  $apply: Boolean!
  $file: Upload!
) {
  CalibrationFileUpload(
    args: $args
    apply: $apply
    file: $file
  ) {
    projectId
    signOff
    creates {
      managerName
    }
  }
}
`;

export const TALENT_REVIEW_UPLOAD = gql`
mutation TalentReviewFileUpload (
  $args: TalentReviewFileUploadArgs!
  $apply: Boolean!
  $file: Upload!
) {
  TalentReviewFileUpload(
    args: $args
    apply: $apply
    file: $file
  ) {
    projectId
    sendEmail
    endTime
    includeDeadlineInEmail
    creates {
      managerName
      managerEmail
    }
    deletes {
      managerName
      managerEmail
    }
    updates {
      managerName
      managerEmail
    }
    noChanges {
      managerName
      managerEmail
    }
    errors {
      managerName
      managerEmail
    }
    errorMessages
    errorMessage
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