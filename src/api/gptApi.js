import axios from 'axios';

export const gptApi = async (data) => {

  console.log(JSON.stringify(data));

  try {
    const response = await axios.post(
      'https://ai-imagegen-backend.onrender.com/api/v1/groupHug/organize',
      {data}, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Response:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error posting data:', error);
  }
};  
