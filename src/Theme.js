import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  white,
  grey500,
  black
} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  appBar: {
    height: 40,
    color: white,
    textColor: black,
    lineHeight: 40,
    fontSize: '1em'
  }
})

console.log(theme)

export default theme;