import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { CustomCursor } from "./components";
import MainPage from "./pages/MainPage";
import StoryPage from "./pages/StoryPage";
import QuizPage from "./pages/QuizPage";

function App() {
	let navigate = useNavigate();
	return (
		<>
			<CustomCursor />
			<Routes>
				<Route
					path="/"
					element={
						<img
							src="/ouat_start.svg"
							width="100%"
							height="80%"
							alt="시작화면"
							onClick={() => {
								navigate("/main");
							}}
						></img>
					}
				/>
				<Route path="/main" element={<MainPage />} />
				<Route path="/story" element={<StoryPage />} />
				<Route path="/quiz" element={<QuizPage />} />
			</Routes>
		</>
	);
}

export default App;
