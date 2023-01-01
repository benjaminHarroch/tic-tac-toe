

import React from 'react'

export const WinningMessage = ({playerO,playerX}) => {

    
  return (

    <div style={{"display":"flex" ,"margin-left":"2em","font-weight":"500" }} className='container-winnigMessage'> 
    
       <div style={{"padding":"0 2em"}}>player O  have {playerO.countWin}  </div>
       <div>player X  have {playerX.countWin}  </div>

    </div>
  )
}
