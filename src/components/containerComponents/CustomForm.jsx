import React from 'react';

export default function CustomForm({onSubmit, children}) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
