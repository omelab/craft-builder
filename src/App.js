/* eslint-disable no-dupe-keys */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { Editor, Frame, Element } from '@craftjs/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardBottom, CardTop } from './components/user/Card';
import { Text } from './components/user/Text';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(180deg, #222 30%, #333 90%)',
    padding: '0 30px',
    borderRadius: 0,
    color: '#fff',
    padding: 20,
    height: '100vh',
  },
  leftPanel: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '0 30px',
    borderRadius: 0,
    color: '#fff',
    padding: 20,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Topbar />
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={20} background="#f00" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.leftPanel}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
