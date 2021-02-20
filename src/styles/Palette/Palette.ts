import { ThemeEnums } from "enum/ThemeEnum";
import { useRecoilValue } from "recoil";
import { themeMode } from "recoil/Theme";

interface IPaletteTypes {
	red: string;
	orange: string;
	yellow: string;
	green: string;
	blue: string;
	skyBlue: string;
	navy: string;
	purple: string;
	pink: string;
	mint: string;
	lighterGray: string;
	gray: string;
	theme: string;
	contrast: string;
	white: string;
	black: string;
	snow: string;
	primary: string;
}

const theme = Number(localStorage.getItem('theme'));
const { LIGHT } = ThemeEnums;

export const Palette: IPaletteTypes = {
	red: '#F5160A',
	orange: '#e67e22',
	yellow: '#F5E62D',
	green: '#27ae60',
	blue: '#0984e3',
	skyBlue: '#00a8ff',
	navy: '#000080',
	purple: '#841DFA',
	mint: '#00d2d3',
	pink: '#e84393',
	theme: !theme || theme === LIGHT ? '#ffffff' : '#000000',
	contrast: !theme || theme === LIGHT ? '#000000' : '#ffffff',
	lighterGray: '#dfe6e9',
	gray: '#b2bec3',
	white: '#ffffff',
	black: '#000000',
	snow: '#dff9fb',
	primary: '#1b60ff',
};
