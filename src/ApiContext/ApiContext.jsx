import $ from 'jquery'; 
import { createContext, useState } from 'react'

export const ApiContext = createContext(null)

export const ContextProvider = props => {
  const [data, setData] = useState([])

  const callData = (url) => {
    $.ajax({
      url: url,
      dataType: 'json',
      success: (jsonData) => {
        setData(jsonData);
      },
      error: (xhr, status, error) => {
        console.error('Error fetching data:', error);
      },
    });
  };

  const contextValue = {
    ApiData: data,
    SetApiData: setData,
    callData: callData
  }

  return (
    <ApiContext.Provider value={contextValue}>
      {props.children}
    </ApiContext.Provider>
  )
}
