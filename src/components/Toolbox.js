// components/Toolbox.js
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';

import { Element, useEditor } from '@craftjs/core';

import { Container } from './user/Container';
import { Card } from './user/Card';
import { Button } from './user/Button';
import { Text } from './user/Text';

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify-content="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Button variant="contained" size="small">
                  Click me
                </Button>
              )
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Text text="Hello world" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>

        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
