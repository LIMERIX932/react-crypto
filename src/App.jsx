import AppLayout from "./components/layout/AppLayout.jsx";
import { CryptoContextProvider } from "./context/crypto-context.jsx";

const layoutStyle = {
	borderRadius: 8,
	overflow: "hidden",
	width: "calc(50% - 8px)",
	maxWidth: "calc(50% - 8px)",
};

export default function App() {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	);
}
