import { Button, TextField } from "@mui/material";

const RegisterForm = ({values,errors,touched, handleChange, handleSubmit, handleBlur}) => {
  return (
    
            <form onSubmit={handleSubmit}>
                <TextField 
                fullWidth 
                name="username"
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                type="text"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                value={values.username}
                margin="normal"
                />
                <TextField 
                fullWidth 
                name="firstName"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                type="text"
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                value={values.firstName}
                margin="normal"
                />
                <TextField 
                fullWidth 
                name="lastName"
                label="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                type="text"
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                value={values.lastName}
                margin="normal"
                />
                <TextField 
                fullWidth 
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                value={values.email}
                margin="normal"
                />
                <TextField 
                fullWidth 
                name="password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                value={values.password}
                margin="normal"
                />

                <Button fullWidth type="submit" variant="contained" sx={{mt:2}}>Register</Button>

            </form>
          )
}

export default RegisterForm
