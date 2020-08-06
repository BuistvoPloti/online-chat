import React from "react"
import './styles/Header.css'

function Header() {
  return(
    <div className="header__header">
      <img className="header__logo"
           src="https://images.squarespace-cdn.com/content/v1/52f848f3e4b013e3f946b704/1398324146489-XYZK7OWX2MEUDGMU0CP9/ke17ZwdGBToddI8pDm48kA-Kl5fm50t9PFBbNYcTon17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeFtrug_8DMjNMmfD56Je50W_xe0fXE8ypYxVkeHD6yW3WUfc_ZsVm9Mi1E6FasEnQ/goldfinch.png"
           alt="prison break reference"/>
      <p className="header__logoNameFirstPart">European</p>
      <p className="header__logoNameSecondPart">goldfinch</p>
    </div>
  )
}

export{
  Header
}