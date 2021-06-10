import { ThemeEnums } from 'lib/enum/ThemeEnum';
import Storage from 'lib/storage';

const theme: string | null = Storage.getStorage('theme');
const { LIGHT } = ThemeEnums;

const palette = {
	red: '#F5160A',
	orange: '#e67e22',
	yellow: '#ede139',
	green: '#27ae60',
	boldGreen: '#163037',
	blue: '#0984e3',
	skyblue: '#dbedff',
	navy: '#000080',
	purple: '#841DFA',
	mint: '#00d2d3',
	pink: '#e84393',
	theme: !theme || theme === LIGHT ? '#F2F2F2' : '#212121',
	contrast: !theme || theme === LIGHT ? '#212121' : '#F2F2F2',
	lighterGray: '#dfe6e9',
	gray: '#b2bec3',
	white: '#ffffff',
	black: '#000000',
	snow: '#dff9fb',
	navbar: '2c3e50',
	primary: '#1b60ff',
};

export default palette;