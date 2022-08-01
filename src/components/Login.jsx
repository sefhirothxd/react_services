import React from 'react';
import { useAxios } from '../services/useAxios';
import Form from './Form';
import Card from './Card';
const Login = () => {
  const { fetchData, response, loading, error } = useAxios();
  const getDataProfile = (email, discord) => {
    if (email.trim() === '' || discord.trim() === '') {
      return alert('llene todos los campos');
    }
    console.log(email, discord);
    fetchData({
      method: 'GET',
      url: '',
      headers: {
        Email: email,
        'Discord-id': discord,
      },
      data: {},
    });
  };

  return (
    <>
      {response === undefined ? (
        <Form getDataProfile={getDataProfile} error={error} />
      ) : (
        <Card response={response} loading={loading} />
      )}
    </>
  );
};

export default Login;
