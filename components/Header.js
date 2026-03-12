
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Header({ avatar, username }) {
	const firstName = typeof username === 'string' ? username.split(' ')[0] : '';
	return (
		<View style={styles.header}>
			<View style={styles.left}>
				<View style={styles.logo}>
					<Text style={styles.logoText}>G</Text>
				</View>
				<View style={styles.greeting}>
					<Text style={styles.hello}>Hello!</Text>
					<Text style={styles.username}>{firstName}</Text>
				</View>
			</View>

			<View style={styles.right}>
				<TouchableOpacity style={styles.helpBtn}>
					<Text style={styles.helpText}>HELP</Text>
				</TouchableOpacity>
				<Avatar.Image size={40} source={{ uri: avatar }} style={styles.avatar} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 16,
		paddingTop: 12,
		paddingBottom: 8,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	left: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#0057e7',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoText: {
		color: '#fff',
		fontWeight: '800',
		fontSize: 18,
	},
	greeting: {
		marginLeft: 12,
	},
	hello: {
		color: '#333',
		fontSize: 12,
	},
	username: {
		color: '#111',
		fontSize: 16,
		fontWeight: '700',
	},
	right: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	helpBtn: {
		backgroundColor: '#e9f2ff',
		paddingHorizontal: 10,
		paddingVertical: 6,
		borderRadius: 18,
		marginRight: 8,
	},
	helpText: {
		color: '#0057e7',
		fontWeight: '700',
		fontSize: 12,
	},
	avatar: {
		backgroundColor: '#fff',
	},
});
