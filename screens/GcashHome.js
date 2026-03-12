
import React from 'react';
import {
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const user = {
	name: 'Juan Dela Cruz',
	avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
	balance: '₱6,300.68',
};

const actions = [
	{ label: 'Send', icon: 'send' },
	{ label: 'Load', icon: 'cellphone' },
	{ label: 'Transfer', icon: 'bank-transfer' },
	{ label: 'Bills', icon: 'file-document' },
	{ label: 'GInsure', icon: 'shield' },
	{ label: 'Cards', icon: 'credit-card' },
	{ label: 'Tap to Pay', icon: 'credit-card-scan' },
	{ label: 'Commute', icon: 'bus' },
];

const services = [
	{ label: 'GSave', icon: 'piggy-bank' },
	{ label: 'GInvest', icon: 'chart-line' },
	{ label: 'GForest', icon: 'leaf' },
	{ label: 'Travel', icon: 'airplane' },
	{ label: 'Food Hub', icon: 'food' },
	{ label: 'A+ Rewards', icon: 'star-circle' },
];

export default function GcashHome() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.screen}>
				<ScrollView style={styles.contentScroll} bounces={false} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
					<Header avatar={user.avatar} username={user.name} />

					{/* Promo chip centered under header */}
					<View style={styles.promoContainer}>
						<TouchableOpacity style={styles.promoChip}>
							<Text style={styles.promoText}>Tap for Promos</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.topTabs}>
						<TouchableOpacity style={[styles.tab, styles.activeTab]}>
							<Text style={styles.activeTabText}>Wallet</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.tab}>
							<Text style={styles.tabText}>Save</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.tab}>
							<Text style={styles.tabText}>Borrow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.tab}>
							<Text style={styles.tabText}>Grow</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.balanceCard}>
						<View style={styles.balanceLeft}>
							<Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
							<Text style={styles.balanceValue}>{user.balance}</Text>
						</View>
						<TouchableOpacity style={styles.cashInButton}>
							<Text style={styles.cashInText}>+ Cash In</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.actionsCard}>
						<View style={styles.actionsGrid}>
							{actions.map((a) => (
								<TouchableOpacity key={a.label} style={styles.actionItem}>
									<View style={styles.actionIconWrap}>
										<MaterialCommunityIcons name={a.icon} size={22} color="#0057e7" />
									</View>
									<Text style={styles.actionLabel}>{a.label}</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>

					<View style={styles.exploreHeader}>
						<Text style={styles.sectionTitle}>Explore the App</Text>
						<TouchableOpacity>
							<Text style={styles.viewAll}>View All</Text>
						</TouchableOpacity>
					</View>

					<ScrollView horizontal scrollEnabled={true} bounces={false} showsHorizontalScrollIndicator={false} style={styles.exploreList}>
						<View style={{ flexDirection: 'row' }}>
							{services.map((s) => (
								<View key={s.label} style={styles.exploreItem}>
									<View style={styles.exploreIcon}>
										<MaterialCommunityIcons name={s.icon} size={20} color="#0057e7" />
									</View>
									<Text style={styles.exploreLabel}>{s.label}</Text>
								</View>
							))}
						</View>
					</ScrollView>
				</ScrollView>

				<View style={styles.bannerWrapper}>
					<View style={styles.banner}>
						<View style={styles.bannerContent}>
							<Text style={styles.bannerTitle}>Pay all your bills in just one app!</Text>
							<Text style={styles.bannerSubtitle}>Access to 1600+ billers</Text>
							<TouchableOpacity style={styles.bannerButton}>
								<Text style={styles.bannerButtonText}>Pay Bills Now</Text>
							</TouchableOpacity>
						</View>
						<Image source={{ uri: 'https://picsum.photos/300/300' }} style={styles.bannerImage} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#f6f7fb',
	},
	screen: {
		flex: 1,
		justifyContent: 'space-between',
	},
	content: {
		paddingBottom: 12,
	},
	contentScroll: {
		flex: 1,
	},
	topTabs: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		marginTop: 12,
	},
	tab: {
		flex: 1,
		marginHorizontal: 6,
		backgroundColor: 'white',
		borderRadius: 20,
		paddingVertical: 8,
		alignItems: 'center',
	},
	activeTab: {
		backgroundColor: '#e9f2ff',
	},
	tabText: {
		color: '#333',
		fontSize: 12,
		fontWeight: '600',
	},
	activeTabText: {
		color: '#0057e7',
		fontSize: 12,
		fontWeight: '700',
	},
	balanceCard: {
		margin: 12,
		backgroundColor: '#0057e7',
		borderRadius: 16,
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	balanceLeft: {
		flex: 1,
	},
	balanceLabel: {
		color: '#d6e8ff',
		fontSize: 12,
		fontWeight: '600',
	},
	balanceValue: {
		color: '#fff',
		fontSize: 28,
		fontWeight: '800',
		marginTop: 6,
	},
	cashInButton: {
		backgroundColor: '#fff',
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 20,
	},
	cashInText: {
		color: '#0057e7',
		fontWeight: '700',
	},
	actionsCard: {
		marginHorizontal: 12,
		marginTop: 8,
		backgroundColor: '#fff',
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 8,
		elevation: 2,
	},
	actionsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	actionItem: {
		width: (width - 48) / 4,
		alignItems: 'center',
		marginVertical: 8,
	},
	actionIconWrap: {
		width: 52,
		height: 52,
		borderRadius: 26,
		backgroundColor: '#eaf5ff',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 6,
	},
	actionLabel: {
		fontSize: 12,
		color: '#333',
		textAlign: 'center',
	},
	exploreHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		marginTop: 12,
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#000',
	},
	viewAll: {
		color: '#0057e7',
		fontWeight: '700',
		fontSize: 14,
	},
	exploreList: {
		paddingHorizontal: 12,
		marginTop: 0,
		marginBottom: 12,
		height: 140,
	},
	exploreItem: {
		width: 90,
		alignItems: 'center',
		marginRight: 12,
		paddingVertical: 4,
	},
	exploreIcon: {
		width: 68,
		height: 68,
		borderRadius: 34,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 6,
		elevation: 1,
	},
	exploreLabel: {
		fontSize: 12,
		fontWeight: '500',
		color: '#222',
		textAlign: 'center',
		lineHeight: 16,
	},
	banner: {
		marginHorizontal: 12,
		marginTop: 12,
		marginBottom: 12,
		backgroundColor: '#0057e7',
		borderRadius: 12,
		paddingHorizontal: 18,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		minHeight: 160,
	},
	bannerContent: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 6,
	},
	bannerTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '800',
		marginBottom: 6,
	},
	bannerSubtitle: {
		color: '#d6e8ff',
		marginBottom: 12,
	},
	bannerButton: {
		backgroundColor: '#fff',
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 20,
		alignSelf: 'flex-start',
	},
	bannerButtonText: {
		color: '#0057e7',
		fontWeight: '700',
	},
	bannerImage: {
		width: 180,
		height: 180,
		borderRadius: 12,
		marginLeft: 12,
		alignSelf: 'center',
	},
	promoContainer: {
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 8,
	},
	promoChip: {
		backgroundColor: '#ffffff',
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
		elevation: 2,
	},
	promoText: {
		color: '#0057e7',
		fontWeight: '700',
	},
	bannerWrapper: {
		paddingHorizontal: 0,
		paddingBottom: 8,
	},
});
