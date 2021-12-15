import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {
	//Имитация базы данных
	const data = [
		{ name: 'Alex K.', salary: 1500, increase: true },
		{ name: 'Ivan P.', salary: 700, increase: false },
		{ name: 'Inna R.', salary: 1700, increase: true },
		{ name: 'Roza P.', salary: 890, increase: false },
		{ name: 'Sergy V.', salary: 900, increase: false },
		{ name: 'Maks R.', salary: 1100, increase: true }
	];
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployersList data={data}/>
			<EmployersAddForm />
		</div>
	);
}
export default App;