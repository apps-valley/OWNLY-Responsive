import React, {useEffect, useState, useContext, useCallback, useRef, useMemo} from 'react';
import {useStyles} from './styles';
import {
  Box,
  Switch,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Fab,
  SvgIcon,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';
import ReactDOM from 'react-dom/client';
import {renderToString} from 'react-dom/server';
import * as Icons from '@mui/icons-material';
// import * as MuiIcons from '@material-ui/icons';
import EmojiPicker from 'emoji-picker-react';

const totalIcons = Object.keys(Icons).length;
const iconsPerScroll = 50;

function ArtWorks() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {onSelectSvgIcon} = useContext(EditorContext);
  const [visibleIcons, setVisibleIcons] = useState<number>(50);
  const divRef = useRef<HTMLDivElement>(null);
  const iconNames = Object.keys(Icons);

  const classes = useStyles();

  const onClick = useCallback(
    (IconComponent: any) => {
      const svgString = renderToString(<IconComponent />);
      // Create a temporary div to hold the rendered SVG
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = svgString;
      onSelectSvgIcon(svgString);
    },
    [onSelectSvgIcon],
  );

  return (
    <Box className={classes.listWrapper} ref={divRef}>
      <Box mx={2} my={1} ml={3}>
        <Box className={classes.wrrapper}>
          <div>{/* <EmojiPicker /> */}</div>
        </Box>
      </Box>
    </Box>
  );
}

export default ArtWorks;

{
  /* <Box
        style={{ backgroundColor: 'red', width: '100px', height: '100px' }}
        onClick={() => {
          onClick();
        }}
      >
        {'hellvvvvvvvvvvv o '}
      </Box> */
}
