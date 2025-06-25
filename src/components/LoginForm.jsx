import {TextField, Button} from "@mui/material";

const LoginForm = ({values,errors,touched,handleChange,handleSubmit,handleBlur}) => {
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

                <Button fullWidth type="submit" variant="contained" sx={{mt:2}}>Log In</Button>

            </form>
          )
}

export default LoginForm
