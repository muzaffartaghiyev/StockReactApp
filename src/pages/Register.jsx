import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";

import * as Yup from 'yup';


import {Formik} from "formik"
import RegisterForm from "../components/RegisterForm";

import useAuthCall from "../hooks/useAuthCall"

const Register = () => {

  const {register} = useAuthCall()

  const registerSchema = Yup.object().shape({
    username:Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string()
    .email('Invalid email')
    .required('Required'),
   password: Yup.string()
    .min(8, 'Password should be minimum 8 characters')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/[a-z]/,"Password should include lowercase")
    .matches(/[A-Z]/,"Password should include uppercase")
    .matches(/\d/,"Password should include number")
    .matches(/[$%^&*()#@!?-]/,"Password should include special characters ($%^&*()#@!?-)")
    ,
 });
  return (
    <Container maxWidth="lg">
    <AuthHeader />
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik 
            initialValues={{username:"",firstName:"",lastName:"",email:"",password:""}}

              validationSchema={registerSchema}
              onSubmit={(values)=>(
                register(values) 
              )}

              component={(props)=>(<RegisterForm {...props}/>)}
          >
            
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color:"secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

    <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
