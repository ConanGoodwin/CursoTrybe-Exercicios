import React, { useContext } from 'react'
import Header from '../components/Header'
import ListEmails from '../components/ListEmails'
import EmailContext from '../context/contexts/EmailContext';

function EntryBox() {
  const { email, attStatusEmail } = useContext(EmailContext);

  const handleClick = async (status) => {
    const att = ({id,title}) => attStatusEmail({id, title, status,});

    email.forEach(async ({id,title}) => {
      // attStatusEmail({id,title,status})
      await att({id,title});
    });
  } 

  return (
    <div>
      <Header />
      <button onClick={() => handleClick(1)}>marcar todos como lidos</button>
      <button onClick={() => handleClick(0)}>marcar todos como NÃO lidos</button>
      <ListEmails />
    </div>
  )
}

export default EntryBox