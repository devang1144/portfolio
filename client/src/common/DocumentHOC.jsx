import React from 'react'
import { useParams } from 'react-router-dom'
import Document from './document'


const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
};

export default withRouter(Document)