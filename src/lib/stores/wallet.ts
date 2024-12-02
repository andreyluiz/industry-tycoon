import { dev } from '$app/environment';
import { TonConnectUI, toUserFriendlyAddress } from '@tonconnect/ui';
import { readable } from 'svelte/store';

export const tonConnectUI = new TonConnectUI({
	manifestUrl:
		'https://7fad-2001-1708-987-b000-d155-55e9-d6e0-df09.ngrok-free.app/tonconnect-manifest.json'
});

interface Wallet {
	isConnected: boolean;
	balance: number;
}

export const wallet = readable<Wallet>({ isConnected: false, balance: 0 }, (set) => {
	set({ isConnected: tonConnectUI.connected, balance: 0 });

	tonConnectUI.onStatusChange((status) => {
		console.log(tonConnectUI.wallet);
		console.log(status);
		set({
			isConnected: tonConnectUI.connected,
			balance: 0
		});
	});
});

export const connectWallet = () => {
	return tonConnectUI.openModal();
};

export const disconnectWallet = () => {
	return tonConnectUI.disconnect();
};

export const getAccountAddress = () => {
	const rawAddress = tonConnectUI.wallet?.account.address;
	if (!rawAddress) return '';
	const bouncableUserFriendlyAddress = toUserFriendlyAddress(rawAddress);
	const testnetOnlyBouncableUserFriendlyAddress = toUserFriendlyAddress(rawAddress, true);
	const address = dev ? testnetOnlyBouncableUserFriendlyAddress : bouncableUserFriendlyAddress;
	return address.slice(0, 4) + '...' + address.slice(-4);
};
