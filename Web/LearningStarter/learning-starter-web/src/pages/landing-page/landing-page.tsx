import { Box, Container, createStyles, List, Title } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//This is a basic Component, and since it is used inside of
//'../../routes/config.tsx' line 31, that also makes it a page
export const LandingPage = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.homePageContainer}>
      <List>
        <Title order={1} mb={18}>
          Home Page
        </Title>
        <Title order={3}>Exercises:</Title>

        <List.Item icon={<FontAwesomeIcon color="green" icon={faCheck} />}>
          Clone repository from GitHub
        </List.Item>

        <List.Item>
          Task List
          <List withPadding listStyleType="disc">
            <List.Item>Display all tasks in the list</List.Item>
            <List.Item>Allow add/remove task</List.Item>
          </List>
        </List.Item>

        <List.Item>
          Counters
          <List withPadding listStyleType="disc">
            <List.Item>
              Display all counters based on the counter data showing the counter
              name along with the starting value of the counter.
            </List.Item>
            <List.Item>
              Allow for independent increment and decrement of counters
            </List.Item>
          </List>
        </List.Item>

        <List.Item>
          Minimum
          <List withPadding listStyleType="disc">
            <List.Item>
              Write a function that accepts a collection of integers as a
              parameter and returns the minimum value.
            </List.Item>
            <List.Item>
              Allow for independent increment and decrement of counters
            </List.Item>
          </List>
        </List.Item>

        <List.Item>
          Serial Numbers
          <List withPadding listStyleType="disc">
            <List.Item>
              Consider a payment company processing 1,000,000 transactions
              monthly.
            </List.Item>
            <List.Item>
              Determine an approach for assigning these transactions unique
              serial numbers.
            </List.Item>
          </List>
        </List.Item>
      </List>
    </Container>
  );
};

const useStyles = createStyles(() => {
  return {
    homePageContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };
});
