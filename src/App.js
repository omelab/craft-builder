/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { Editor, Frame, Element } from '@craftjs/core';
import lz from 'lzutf8';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardBottom, CardTop } from './components/user/Card';
import { Text } from './components/user/Text';

import axios from 'axios';

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

  const [enabled, setEnabled] = useState(true);

  const [json, setJson] = useState(null);

  // Load save state from server on page load
  useEffect(() => {
    const getData = async () => {
      const stateToLoad = await axios
        .get('http://127.0.0.1:3334/api/public/news/details?slug=test')
        .then(function (response) {
          return response.data.article;
        })
        .catch(function (error) {
          console.log(error);
        });

      const cdata = lz.decompress(lz.decodeBase64(stateToLoad));
      setJson(cdata);
    };
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Basic Page Editor
      </Typography>

      <Editor
        resolver={{ Card, Button, Text, CardTop, CardBottom, Container }}
        enabled={enabled}
      >
        <Topbar />
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame json={json}>
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
