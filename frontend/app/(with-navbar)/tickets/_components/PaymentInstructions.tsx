import IOrder from "./IOrder";

export default function PaymentInstructions({order}: {order: IOrder}) {
	return (
		<main className="flex-grow flex flex-col items-center justify-start pt-8 pb-12 px-4 sm:px-6">
			<div className="w-full max-w-3xl flex flex-col gap-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#3A3033]">
					<div className="flex flex-col gap-1">
						<h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Payment Instructions</h2>
						<p className="text-primary text-lg font-medium">Vodafone Cash Transfer</p>
					</div>
					<div className="flex flex-col items-start md:items-end gap-1">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold">
							<span className="material-symbols-outlined text-[18px] fill-1">pending</span>
							Pending Payment
						</div>
					</div>
				</div>
				<div className="bg-surface-dark rounded-xl border border-[#3A3033] shadow-xl overflow-hidden">
					<div className="p-6 sm:p-8 flex flex-col gap-8">
						<div className="flex gap-4 sm:gap-6">
							<div className="flex-shrink-0 size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/20">1</div>
							<div className="flex flex-col gap-3 flex-grow">
								<h3 className="text-xl font-bold text-white">Review Total Amount</h3>
								<p className="text-gray-400 text-sm">Please transfer the exact amount below. Partial payments may delay your ticket issuance.</p>
								<div className="mt-2 p-5 bg-[#241E20] rounded-lg border border-[#3A3033] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
									<div>
										<p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Total Amount Due</p>
										<p className="text-3xl font-black text-white tracking-tight">EGP {order.totalPrice}</p>
									</div>
									<div className="px-3 py-1 rounded bg-[#3A3033] text-xs text-gray-400">
										Includes taxes &amp; fees
									</div>
								</div>
							</div>
						</div>
						<div className="w-full h-px bg-[#3A3033] ml-14 sm:ml-16"></div>
						<div className="flex gap-4 sm:gap-6">
							<div className="flex-shrink-0 size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/20">2</div>
							<div className="flex flex-col gap-3 flex-grow">
								<h3 className="text-xl font-bold text-white">Transfer to Wallet</h3>
								<p className="text-gray-400 text-sm">Open your Vodafone Cash wallet menu (*9#) or app and transfer the total amount to the number below.</p>
								<div className="mt-2 flex items-center justify-between gap-4 bg-primary/10 border border-primary/30 px-5 py-4 rounded-lg group hover:border-primary transition-colors cursor-pointer">
									<div className="flex items-center gap-4">
										<div className="flex justify-center items-center text-primary bg-primary/20 p-2 rounded-lg">
											<span className="material-symbols-outlined">account_balance_wallet</span>
										</div>
										<div className="flex flex-col">
											<p className="text-gray-400 text-xs font-medium uppercase">Vodafone Cash Number</p>
											<p className="text-white text-xl sm:text-2xl font-mono font-bold tracking-wider">010 1234 5678</p>
										</div>
									</div>
									<button aria-label="Copy number" className="text-primary hover:text-white hover:bg-primary p-2 rounded-md transition-all flex items-center justify-center">
										<span className="material-symbols-outlined">content_copy</span>
									</button>
								</div>
							</div>
						</div>
						<div className="w-full h-px bg-[#3A3033] ml-14 sm:ml-16"></div>
						<div className="flex gap-4 sm:gap-6">
							<div className="flex-shrink-0 size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/20">3</div>
							<div className="flex flex-col gap-3 flex-grow">
								<h3 className="text-xl font-bold text-white">Confirm Payment</h3>
								<p className="text-gray-400 text-sm">
									Send a screenshot of the successful transaction receipt to our confirmation team on WhatsApp.<br />
									<span className="text-white">Please include your Order #{order.id} in the message.</span>
								</p>
								{/* <div className="mt-4 flex flex-wrap gap-4">
									<button className="flex-1 min-w-[200px] bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
										<span className="material-symbols-outlined">send</span>
										Send Receipt via WhatsApp
									</button>
									<button className="flex-none bg-[#3A3033] hover:bg-[#45393d] text-white font-medium py-3 px-6 rounded-lg transition-colors border border-[#4d3f44]">
										I'll do this later
									</button>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}