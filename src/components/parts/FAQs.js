// ** MUI Imports
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Grid, Container } from "@mui/material";
import { useState } from "react";
// ** Icons Imports
import { styled } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
const rows = [
  {
    name: "How do I create an account?",
    description: `Click “Sign up” button to create an account with your email address and mobile phone number. 
      You will get a four digit code to verify your email or phone number.`,
  },
  {
    name: "Why do I need to complete ID verification?",
    description: `Before you can buy or sell real estate for crypto on TipTop, you need to complete the identity 
      verification process, also known as Know Your Customer (KYC). Identity verification helps to fight 
      fraud and assures that clients are using the platform with their true identity.`,
  },
  {
    name: "Can I buy my new home without an Agent?",
    description: `Yes, you can buy a home without spending time looking for a realtor. Just select a property 
    you want to buy and click the contact button. Our agents will help you make the home 
    buying experience pleasant and efficient.`,
  },
  {
    name: "Can I sell my home without an Agent?",
    description: `Yes, you can sell your home yourself, without the help of a realtor. Just fill out the "For Sale 
     by Owner" form, upload HD pictures, select the sale price in Dollars, Bitcoin or Ethereum 
     and post your add for free.`,
  },
  {
    name: "I need professional photos of my home. Can you do it?",
    description: `If you need professional photos of your property, you can hire a qualified photographer 
      under "Client Services".`,
  },
  {
    name: "I’m a realtor. How can I post on your platform?",
    description: `Passionate about real estate? Want to offer your clients advanced services? Just sign up, fill 
      out the "Agent Professional Profile" and click the "Submit" button. We will contact you for a 
      quick interview. After that, you can place your listings on TipTop platform for free.`,
  },
];
const MuiAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: 0,
  },
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  "&:before": {
    display: "none",
  },
}));
const FAQs = () => {
  const [expanded, setExpanded] = useState("");

  return (
    <Container maxWidth="xxl" disableGutters sx={{ py: 4, mt: 4 }}>
      <Container maxWidth="md" disableGutters>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ m: 2 }}>
              Frequently asked questions
            </Typography>
            {rows?.map((item, index) => (
              <MuiAccordion
                expanded={expanded === item.name}
                onChange={() =>
                  expanded === item.name
                    ? setExpanded("")
                    : setExpanded(item.name)
                }
                sx={{
                  transition: "all 0.5s ease 0s",
                  my: 1,
                  "&:before": {
                    display: "none",
                  },
                  background: "transparent",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  sx={{ background: "transparent", boxShadow: "none" }}
                  expandIcon={
                    expanded !== item.name ? (
                      <Add
                        sx={{
                          color: "#000",
                          backgroundColor: "#fff",
                          borderRadius: "20px",
                        }}
                      />
                    ) : (
                      <Remove
                        sx={{
                          color: "#000",
                          backgroundColor: "#fff",
                          borderRadius: "20px",
                        }}
                      />
                    )
                  }
                >
                  <Typography variant="subtitle1">{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FAQs;
