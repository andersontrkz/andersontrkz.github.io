import { Box, Switch } from '@material-ui/core'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { withStyles } from '@material-ui/core/styles';

const SwitchTheme = () => {
  const { switchOn, setSwitchOn, setBackdrop } = useContext(Context)

  const setColorTheme = () => {
    setBackdrop(true)
    var theme = document.documentElement.style;
    theme.setProperty('--major-theme', switchOn ? 'var(--major-dark-theme)' : 'var(--major-light-theme)');
    theme.setProperty('--text-theme', switchOn ? 'var(--text-dark-theme)' : 'var(--text-light-theme)');
    theme.setProperty('--primary-theme', switchOn ? 'var(--primary-dark-theme)' : 'var(--primary-light-theme)');
    theme.setProperty('--secundary-theme', switchOn ? 'var(--secundary-dark-theme)' : 'var(--secundary-light-theme)');
    theme.setProperty('--tertiary-theme', switchOn ? 'var(--tertiary-dark-theme)' : 'var(--tertiary-light-theme)');
    theme.setProperty('--inverter-theme', switchOn ? 'var(--inverter-dark-theme)' : 'var(--inverter-light-theme)');
    theme.setProperty('--logo-theme', switchOn ? 'var(--logo-dark-theme)' : 'var(--logo-light-theme)');
    theme.setProperty('--background-theme', switchOn ? 'var(--background-dark-theme)' : 'var(--background-light-theme)');
    setTimeout(() => setBackdrop(false), 300);
  }

  useEffect(() => {
    setColorTheme();
  }, [switchOn])

  const handleChange = () => {
    setSwitchOn(!switchOn);
  };

  const CustomSwitch = withStyles({
    switchBase: {
      color: 'var(--secundary-theme)',
      '&$checked': {
        color: 'var(--secundary-theme)',
      },
      '&$checked + $track': {
        backgroundColor: 'var(--secundary-theme)',
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <Box className="align-container">
      { switchOn ? <Brightness5OutlinedIcon className="switch-icon"/> : <Brightness5Icon className="switch-icon"/> }
      <CustomSwitch
        checked={switchOn}
        onChange={handleChange}
        name="switchOn"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      { switchOn ? <Brightness2OutlinedIcon  className="switch-icon"/> : <Brightness2Icon  className="switch-icon"/> }
    </Box>
  )
}

export default SwitchTheme;