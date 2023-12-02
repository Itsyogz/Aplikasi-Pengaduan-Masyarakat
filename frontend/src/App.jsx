import React from "react";

import RegisterPage from "./pages/register";

function App() {
  return (
  <div className="flex justify-center min-h-screen items-center">
    {/* <LoginPage /> */}

    <RegisterPage />



      <div className="flex items-center justify-center text-xs text-slate-500">
        <table>
          <tr>
            <th style={{fontSize: '10px', fontFamily:'Poppins', paddingTop:'4px'}} colSpan={2} className="font-medium">
              Belum punya akun?
              </th>
          </tr>
          <tr>
            <td style={{fontSize: '8px', fontFamily:'Poppins', paddingTop:'0px'}}><a href="#" className="text-blue-500 underline">
              Mendaftar
              </a></td>
            <td style={{textAlign:'center', fontSize: '8px', fontFamily:'Poppins', paddingTop:'0px'}}><a href="#" className="text-blue-500 underline">
              Lupa Sandi
              </a></td>
          </tr>
        </table>
      </div>
    
  </div>
  );
}

export default App;
