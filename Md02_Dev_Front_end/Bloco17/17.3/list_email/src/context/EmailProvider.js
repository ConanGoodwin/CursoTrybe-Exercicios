import React, { useState } from 'react'
import { emails } from '../services/email';
import EmailContext from './contexts/EmailContext';

const EmailProvider = ({ children }) => {
  const [ email, setEmail ] = useState(emails);

  const attStatusEmail = (newEmail) => {
    const restEmail = email.filter(({ id }) => id !== newEmail.id);

    setEmail([...restEmail, newEmail].sort((a,b) => a.id - b.id ));
    console.log(email);
  }

  const objProvider = {
    email,
    attStatusEmail
  }

  return (
    <EmailContext.Provider value= {objProvider } >
      { children }
    </EmailContext.Provider>
  )
}

export default EmailProvider