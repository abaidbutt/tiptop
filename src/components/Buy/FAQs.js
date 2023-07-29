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
    name: "I want to buy property, how should I start?",
    description: `If you don't have a real estate agent yet, we work with the best real estate agents who will be happy to 
    assist you buying a new property. Just sign up to create a free account, go to menu, select Services and 
    "Find an Agent". `,
  },
  {
    name: "I already have a realtor, what’s next? ",
    description: `If you already have a realtor, just sign up to create a free account, search for properties, mark your 
    favorites, and contact seller directly or via your realtor.`,
  },
  {
    name: "Why should I buy property with crypto? ",
    description: `If you're a strong crypto believer, you can enjoy many advantages purchasing your new home on TipTop 
    with Bitcoin or other cryptocurrency. Some benefits may include detachment from regular currencies, 
    wealth preservation and possible capital gains in the long term.`,
  },
  {
    name: "How can I buy property with Bitcoin or other crypto? ",
    description: `Just sign up to create a free account, complete the verification process and follow simple steps to 
    purchase your new home with crypto. `,
  },
  {
    name: "I want to buy a new home with dollars. Why should I choose TipTop?",
    description: `When you buy property traditionally with TipTop, your purchase is also made via a smart contract and 
    your property ownership is registered on blockchain for enhanced security. This great feature is designed 
    to protect your investment.`,
  },
  {
    name: "How long will it take to buy property?",
    description: `If you want to buy property on TipTop traditionally and register a transaction on blockchain, it will take less 
    than 4 to 6 weeks to close the deal. If you are buying property with Bitcoin or other cryptocurrency, the 
    closing process will be simple and fairly quick.`,
  },
  {
    name: "Why should I buy property now?",
    description: `Buying a new home, relocating or investing in real estate could be very exciting. Despite the real estate 
    market ups and downs, owning a property is positive and prestigious. Consider current market trends, 
    mortgage rates, location, your budget and personal goals to make the best decision.`,
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
    <Container maxWidth="xxl" disableGutters sx={{ py: 4, mt:4 }}>
      <Container maxWidth="md" disableGutters>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ m: 2 }} >
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
                  <Typography variant="subtitle1">{item.description}</Typography>
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
