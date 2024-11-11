

export const loginService = async (userInfo) => {
    const res = await fetch("", 
      {
        method: 'POST',
        body: JSON.stringify(userInfo),   //convert from javascript format to json format
        headers: {

            'Content-type' : "appliction/json",
        }
      }
    )  // provide your login url api 


    const data = await res.json();
    return data;
}