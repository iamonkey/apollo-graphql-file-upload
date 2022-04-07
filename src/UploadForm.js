import { useMutation } from "@apollo/client";
import React from "react";
import { gql } from "@apollo/client";
import { COMPANY_EMPLOYEE_UPLOAD } from "./uploadFilesQueries";

export const CompanyFragments = {
  company: gql`
    fragment Company on Company {
      id
      name
      logoUrl
    }
  `,
};

export const COMPANIES_QUERY = gql`
  query Companies {
    companies {
      ...Company
    }
  }
  ${CompanyFragments.company}
`;

const UploadForm = () => {
  const [fileUpload, fileUploadResponse] = useMutation(COMPANY_EMPLOYEE_UPLOAD, {
    onError: () => {},
  });

  // useQuery(COMPANIES_QUERY);


  const handleUpload = (event) => {
    if (event.target?.files[0]) {
      fileUpload({ variables: { file: event.target?.files[0], companyId:2, apply:true,  } });
    }
  };

  return (
    <>
      <input name="document" type="file" onChange={handleUpload} />
      {fileUploadResponse.error ? (
        <div>{fileUploadResponse.error.message}</div>
      ) : null}
    </>
  );
};

export default UploadForm;
