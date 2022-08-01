import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL =
  'https://larnu-api-upy5mhs63a-rj.a.run.app/api/v1/bootcamp/profile';

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      if (result.status === 200) {
        setResponse(result.data);
        console.log(result);
        console.log(loading);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return { response, error, loading, fetchData };
};
