import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.mobashirmonim.itk',
	appName: 'Islamic ToolKit',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	},
	plugins: {
		SplashScreen: {
			launchShowDuration: 1000,
			launchAutoHide: true,
			launchFadeOutDuration: 1000,
			backgroundColor: '#334154ff',
			androidSplashResourceName: 'splash',
			splashFullScreen: true,
			splashImmersive: true,
			layoutName: 'launch_screen',
			useDialog: true
		}
	}
};

export default config;
