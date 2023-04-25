type User = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };

  
  async function getUsers() {
    try {
      // 👇️ const response: Response
      const response = await fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      // if bad request print error
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // 👇️ const result: GetUsersResponse
      const result = (await response.json()) as GetUsersResponse;
  
      console.log('result is: ', JSON.stringify(result, null, 4));
  
      return result;
      
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
  getUsers();