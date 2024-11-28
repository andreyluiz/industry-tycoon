import { writable } from 'svelte/store';

export interface Wallet {
	balance: number;
}

export const wallet = writable<Wallet>({ balance: 10000000 });

export const addBalance = (amount: number) => {
	wallet.update((wallet) => ({ ...wallet, balance: wallet.balance + amount }));
};

export default wallet;
