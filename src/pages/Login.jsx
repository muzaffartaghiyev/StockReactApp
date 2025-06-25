import Avatar from "@mui/material/Avatar";
import {Box, TextField, Button} from "@mui/material";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import LoginForm from "../components/LoginForm"

import { Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {
  const theme = useTheme();

  const loginSchema = Yup.object().shape({
      username:Yup.string()
        .required('Required'),
     password: Yup.string()
      .required('Required')
   });

  return (
    <Container maxWidth="lg">
    <AuthHeader />
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{username:"",password:""}}

            validationSchema={loginSchema}

            onSubmit={(values)=>(
              console.log(values)
            )}
            component={(props)=>(<LoginForm {...props}/>)}
          
          >




          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">
              Don't have an account? Sign Up
            </Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
