
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

export default function ServiceCard({ label, icon }) {
	return (
		<TouchableOpacity style={styles.card} onPress={() => {}}>
			<View style={styles.iconContainer}>
				<Avatar.Icon
					size={36}
					icon={icon}
					style={styles.avatar}
					color="#0057e7"
					backgroundColor="#e3f0ff"
				/>
			</View>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '23%',
		alignItems: 'center',
		marginVertical: 8,
	},
	iconContainer: {
		marginBottom: 4,
	},
	avatar: {
		backgroundColor: '#e3f0ff',
	},
	label: {
		fontSize: 12,
		color: '#333',
		textAlign: 'center',
	},
});
