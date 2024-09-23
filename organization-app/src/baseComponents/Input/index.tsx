import React from 'react';
import { Field } from './styles';

interface props {
  name: string,
}

export default function Input({name}: props) {
  return (
    <Field name={name} type="text"/>
  )
}
