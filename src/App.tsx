function App() {
	return (
		<main className="flex items-center justify-center h-screen bg-neutral-paleBlue">
			<article className="flex flex-col w-2/3 max-w-4xl bg-white md:flex-row">
				<div className="rounded-b-[45px] bg-gradient-to-t  from-gradient-lightRoyalBlue to-gradient-lightSlateBlue">
					<p className="py-8 text-lg font-semibold text-center font-Hanken text-neutral-lightLavender">
						Your Result
					</p>
					<div className="flex flex-col items-center justify-center w-32 h-32 px-8 py-8 m-auto rounded-full bg-gradient-to-b from-gradient-violetBlue">
						<h1 className="text-6xl text-white font-Hanken">76</h1>
						<p className="text-neutral-lightLavender font-Hanken">of 100</p>
					</div>
					<div>
						<h1 className="pt-6 pb-2 text-2xl tracking-wide text-center text-white font-Hanken">
							Great
						</h1>
						<div className="flex items-center justify-center text-center">
							<p className="w-2/3 pb-10 text-neutral-lightLavender font-Hanken">
								You scored higher than 65% of the people who have taken these
								tests.
							</p>
						</div>
					</div>
				</div>
				<div className="px-8 py-5 md:w-3/4">
					<h1 className="text-xl font-semibold font-Hanken text-neutral-darkGrayBlue">
						Summary
					</h1>
					<div className="flex flex-col gap-4 py-6">
						<div className="flex justify-between px-4 py-5 rounded-xl bg-primary-lightRed bg-opacity-5">
							<div className="flex">
								<img src="/images/icon-reaction.svg" alt="" className="mr-2" />
								<p className="font-semibold text-primary-lightRed font-Hanken">
									Reaction
								</p>
							</div>
							<p className="font-semibold text-neutral-lightLavender font-Hanken">
								<span className="font-bold text-neutral-darkGrayBlue">80</span>{" "}
								/ 100
							</p>
						</div>
						<div className="flex justify-between px-4 py-5 rounded-xl bg-primary-orangeyYellow bg-opacity-5">
							<div className="flex">
								<img src="/images/icon-memory.svg" alt="" className="mr-2" />
								<p className="font-semibold text-primary-orangeyYellow font-Hanken">
									Memory
								</p>
							</div>
							<p className="font-semibold text-neutral-lightLavender font-Hanken">
								<span className="font-bold text-neutral-darkGrayBlue">92</span>{" "}
								/ 100
							</p>
						</div>
						<div className="flex justify-between px-4 py-5 rounded-xl bg-primary-greenTeal bg-opacity-5">
							<div className="flex">
								<img src="/images/icon-verbal.svg" alt="" className="mr-2" />
								<p className="font-semibold text-primary-greenTeal font-Hanken">
									Verbal
								</p>
							</div>
							<p className="font-semibold text-neutral-lightLavender font-Hanken">
								<span className="font-bold text-neutral-darkGrayBlue">61</span>{" "}
								/ 100
							</p>
						</div>
						<div className="flex justify-between px-4 py-5 rounded-xl bg-primary-cobaltBlue bg-opacity-5">
							<div className="flex">
								<img src="/images/icon-visual.svg" alt="" className="mr-2" />
								<p className="font-semibold text-primary-cobaltBlue font-Hanken">
									Visual
								</p>
							</div>
							<p className="font-semibold text-neutral-lightLavender font-Hanken">
								<span className="font-bold text-neutral-darkGrayBlue">72</span>{" "}
								/ 100
							</p>
						</div>
					</div>
					<button
						type="button"
						className="flex items-center justify-center w-full p-4 m-auto mb-8 text-lg text-white duration-300 rounded-full hover:bg-gradient-violetBlue hover:transition-all font-Hanken bg-neutral-darkGrayBlue"
					>
						Continue
					</button>
				</div>
			</article>
		</main>
	);
}

export default App;
