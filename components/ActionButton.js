
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function ActionButton({ label, icon }) {
	return (
		<View style={styles.container}>
			<Button
				mode="contained"
				icon={icon}
				style={styles.button}
				labelStyle={styles.label}
				contentStyle={styles.content}
				onPress={() => {}}
			>
				{label}
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 4,
	},
	button: {
		backgroundColor: '#0057e7',
		borderRadius: 12,
		elevation: 2,
		minWidth: 80,
		minHeight: 40,
		justifyContent: 'center',
	},
	label: {
		color: '#fff',
		fontSize: 12,
		fontWeight: 'bold',
	},
	content: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		paddingHorizontal: 4,
	},
});
