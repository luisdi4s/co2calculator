import React, { useState } from "react";
import "./styles.scss"
import { TextField, InputAdornment, Switch, FormControlLabel, Button, Typography } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from 'yup';
import average_icon from "../../res/average_icon.png"
import low_icon from "../../res/low_icon.png"
import high_icon from "../../res/high_icon.png"

export default function PageContent() {
	const initialValues = {
		monthly_electric_bill_value: "",
		monthly_gas_bill_value: "",
		monthly_oil_bill_value: "",
		car_miles_per_year: "",
		num_short_flights_per_year: "",
		num_long_flights_per_year: "",
		recicle_newspaper: false,
		recicle_aluminium: false
	}

	const validationSchema = Yup.object().shape({
		monthly_electric_bill_value: Yup.number().required(),
		monthly_gas_bill_value: Yup.number().required(),
		monthly_oil_bill_value: Yup.number().required(),
		car_miles_per_year: Yup.number().required(),
		num_short_flights_per_year: Yup.number().required(),
		num_long_flights_per_year: Yup.number().required(),
		recicle_newspaper: Yup.boolean().required(),
		recicle_aluminium: Yup.boolean().required()
	})

	const [ result, setResult ] = useState(false)

	async function makeRequest(values) {
		fetch(`http://localhost:3999/calculate`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({...values})
			}).then((response) => response.json())
			.then(data => {
				if(data) setResult(data)
			}).catch(() => {
				window.alert("An error ocurred, try again later.")
			})
	}

	return (
		<div className="page-content">
			<div className="calculator-box">
				<div className="form-container">
					<Formik
						initialValues={initialValues}
						enableReinitialize
						onSubmit={(values) => console.log(values)}
						validationSchema={validationSchema}
						validateOnChange
						validateOnBlur
					>
						{({values, setFieldValue, resetForm, dirty, isValid }) => (
							<>
								<TextField
									label="Monthly Electric Bill"
									className="input-informations"
									type="number"
									value={values.monthly_electric_bill_value}
									onChange={(evt) => setFieldValue("monthly_electric_bill_value", evt.target.value)}
									color="success"
									InputProps={{
										endAdornment: <InputAdornment position="end">$</InputAdornment>
									}}
								/>
								<TextField
									label="Monthly Gas Bill"
									className="input-informations"
									type="number"
									value={values.monthly_gas_bill_value}
									onChange={(evt) => setFieldValue("monthly_gas_bill_value", evt.target.value)}
									color="success"
									InputProps={{
										endAdornment: <InputAdornment position="end">$</InputAdornment>
									}}
								/>
								<TextField
									label="Monthly Oil Bill"
									className="input-informations"
									type="number"
									value={values.monthly_oil_bill_value}
									onChange={(evt) => setFieldValue("monthly_oil_bill_value", evt.target.value)}
									color="success"
									InputProps={{
										endAdornment: <InputAdornment position="end">$</InputAdornment>
									}}
								/>
								<TextField
									label="Total yearly mileage on your car"
									className="input-informations"
									type="number"
									value={values.car_miles_per_year}
									onChange={(evt) => setFieldValue("car_miles_per_year", evt.target.value)}
									color="success"
									InputProps={{
										endAdornment: <InputAdornment position="end">mi</InputAdornment>
									}}
								/>
								<TextField
									label="Number of short flights you've taken in the past year"
									value={values.num_short_flights_per_year}
									type="number"
									onChange={(evt) => setFieldValue("num_short_flights_per_year", evt.target.value)}
									color="success"
									className="input-informations"
								/>
								<TextField
									label="Number of long flights you've taken in the past year"
									value={values.num_long_flights_per_year}
									type="number"
									onChange={(evt) => setFieldValue("num_long_flights_per_year", evt.target.value)}
									color="success"
									className="input-informations"
								/>
								<div className="input-informations">
									<FormControlLabel control={<Switch
										checked={values.recicle_newspaper}
										onChange={() => setFieldValue("recicle_newspaper", !values.recicle_newspaper)}
										color="success"
										inputProps={{ 'aria-label': 'controlled' }}
									/>} label="Recicles Newspapers" />
								</div>
								<div className="input-informations">
									<FormControlLabel control={<Switch
										checked={values.recicle_aluminium}
										onChange={() => setFieldValue("recicle_aluminium", !values.recicle_aluminium)}
										color="success"
										inputProps={{ 'aria-label': 'controlled' }}
									/>} label="Recicles Aluminium" />
								</div>

								<div className="submit-container">
									<Button variant="text" color="error" onClick={() => resetForm()}>Clear All</Button>
									<Button disabled={!(isValid && dirty)} variant="contained" color="success" type="submit" onClick={() => { makeRequest(values)}}>CALCULATE</Button>
								</div>
							</>
						)}
					</Formik>
				</div>
			</div>

			{ result && (
				<div className="result-container">
					{
						result?.result === "HIGH" ? <img className="icon-result" src={high_icon}/> : result?.result === "AVERAGE" ? <img className="icon-result" src={average_icon}/> : <img className="icon-result" src={low_icon}/>
					}
					<Typography align="center" variant="h4"><b>{result?.result}</b></Typography>
					<Typography align="center" variant="h6">{result?.co2_sum} pounds per year</Typography>
					
					{result?.result === "VERY LOW" && <Typography variant="body" className="result-description">Excellent job! Your "Carbon Footprint" is very low. Keep in mind that an “ideal” carbon footprint (or a “low” footprint) is anywhere from 6,000 to 15,999 pounds per year, so you're are doing better than expected.</Typography>}
					{result?.result === "LOW" && <Typography variant="body" className="result-description">Great job! Your "Carbon Footprint" is low. Keep in mind that an “ideal” carbon footprint (or a “low” footprint) is anywhere from 6,000 to 15,999 pounds per year, so you're doing a great job.</Typography>}
					{result?.result === "AVERAGE" && <Typography variant="body" className="result-description">Not bad. 16,000-22,000 is considered average. You can always make small adjustments in order to lower your carbon footprint and stay below the 16.000 pound per year.</Typography>}
					{result?.result === "HIGH" && <Typography variant="body" className="result-description">Your "Carbon Footprint" is higher than the average and this is not good. You may want to take some of these “living green” practices into consideration. There are a number of small sacrifices/measures you can make in order to lower your carbon footprint and some of them are in the footer of this page.</Typography>}
					
				</div>
			)}
		</div>
	)
}

