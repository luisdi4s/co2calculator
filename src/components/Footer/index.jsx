import React from "react";
import "./styles.scss"
import { Typography } from '@mui/material'

export default function Footer () {
	return (
    <div className="footer">
      <div className="references-box">
        <Typography className="references-title"><b>Reference Material</b></Typography>
        <Typography variant="body2" className="references-link"><a target="blank" href="https://justenergy.com/blog/how-to-calculate-your-carbon-footprint/"><u>How to calculate your Carbon Footprint</u></a></Typography>
        <Typography variant="body2" className="references-link"><a target="blank" href="https://sustainability.georgetown.edu/community-engagement/things-you-can-do/"><u>How to reduce your Carbon Footprint</u></a></Typography>
        <Typography variant="body2" className="references-link"><a target="blank" href="https://www.conservation.org/stories/what-is-a-carbon-footprint"><u>What's Carbon Footprint</u></a></Typography>
      </div>

      <div className="copyright-box">
        <Typography className="references-link"><a target="blank" href="https://www.linkedin.com/in/luisfdteixeira/"><b>© Luís Teixeira - 2022</b></a></Typography>
      </div>
		</div>
  )
}

