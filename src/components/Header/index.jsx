import React from "react";
import calc_logo from "../../res/calc.png"
import "./styles.scss"
import { Typography } from '@mui/material'

export default function Header () {
	return (
    <div className="page-header">
			<img src={calc_logo} alt="" className="logo"/>
			<Typography className="title">CO2 Calculator</Typography>
		</div>
  )
}

