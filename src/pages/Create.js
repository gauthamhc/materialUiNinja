import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  basic: {
    margin: 20,
  },
  field: {
    margin: "10px 0",
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const { basic, field } = classes;

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [value, setValue] = useState("honey");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && details) {
      console.log(name, details, value);
    }
    if (name === "") {
      setNameError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    setName("");
    setDetails("");
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create Pages
      </Typography>

      <form
        className={basic}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          className={field}
          variant="outlined"
          color="secondary"
          label="Name"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={nameError}
        />
        <TextField
          className={field}
          variant="outlined"
          color="secondary"
          multiline
          rows="4"
          label="Details"
          fullWidth
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          error={detailsError}
        />

        <FormControl className={field}>
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormLabel component="legend">Gender</FormLabel>
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Honey" value="honey" />
            <FormControlLabel
              control={<Radio />}
              label="Health"
              value="health"
            />
            <FormControlLabel
              control={<Radio />}
              label="Happiness"
              value="happiness"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
