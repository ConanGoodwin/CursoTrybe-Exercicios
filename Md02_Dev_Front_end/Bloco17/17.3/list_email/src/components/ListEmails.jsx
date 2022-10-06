import React from 'react'
import { useContext } from 'react'
import EmailContext from '../context/contexts/EmailContext'

function ListEmails() {
  const { email, attStatusEmail } = useContext(EmailContext);

  return (
    <div>
      <ul>
        {
          email.map(
            ({id, title, status}) => 
              <li key={ id }>
                id: {id} titulo: {title} lido: {status}
                <button onClick={() => attStatusEmail({ id, title, status: 1 })}>Lido</button>
                <button onClick={() => attStatusEmail({ id, title, status: 0 })}>Não Lido</button>
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default ListEmails