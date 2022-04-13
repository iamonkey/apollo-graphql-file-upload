import { useMutation } from "@apollo/client";
import React from "react";
import { gql } from "@apollo/client";
import { COMPANY_CALIBRATION_UPLOAD, COMPANY_CALIBRATION_UPLOAD2, COMPANY_CALIBRATION_UPLOAD3, COMPANY_EMPLOYEE_UPLOAD, TALENT_REVIEW_UPLOAD } from "./uploadFilesQueries";

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

/*
const UploadForm = () => {
  const [fileUpload, fileUploadResponse] = useMutation(COMPANY_EMPLOYEE_UPLOAD, {
    onError: () => {},
  });


  const handleUpload = (event) => {
    if (event.target?.files[0]) {
      fileUpload({ variables: { 
        file: event.target?.files[0], 
        apply:true, 
        args: { companyId:2 }  
        } 
      });
    }
  };
*/
/*
  const UploadForm = () => {
    const [fileUpload, fileUploadResponse] = useMutation(COMPANY_CALIBRATION_UPLOAD2, {
      onError: () => {},
    });
  
  
    const handleUpload = (event) => {
      if (event.target?.files[0]) {
        fileUpload({ variables: { 
          file: event.target?.files[0], 
          apply:true, 
          args: { projectId:2, signOff:false }  
          } 
        });
      }
    };
    
*/
    const UploadForm = () => {
      const [fileUpload, fileUploadResponse] = useMutation(TALENT_REVIEW_UPLOAD, {
        onError: () => {},
      });
    
    
      const handleUpload = (event) => {

        console.log(`env: ${process.env.REACT_APP_GRAPHQL_URL}`);

        if (event.target?.files[0]) {
          fileUpload({ variables: { 
            file: event.target?.files[0], 
            apply:true, 
            args: { projectId:2, sendEmail:false }  
            } 
          });
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
