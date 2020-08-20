import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import Accordion from './components/Accordion';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Referente from './components/Referente/Referente';
import NavBar from './components/NavBar/NavBar';
import MyTravel from './components/MyTravel/MyTravel';
import DayCard from './components/DayCard/DayCard';
import Dayline from './components/DayCard/Dayline/Dayline';
import Tariffa from './components/Tariffa/Tariffa';
import Note from './components/Note/Note';
import OnlyDescription from './components/OnlyDescription/OnlyDescription';
import { Element } from 'react-scroll';
import * as utils from './utils';
import './App.css';

const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'

export default function App() {
	utils.setCssVhVariable();
	var x = 1
	const [datiJson, setDatiJson] = useState(null);
	const [arrayCitta, setArrayCitta] = useState([]);

	useEffect(() => {
		const getDati = async () => {
			const dati$ = await fetch(urlJSON).then(res => res.json());
			setDatiJson(dati$.results.data);
			setArrayCitta(utils.mapCitta(dati$.results.data.rows));
		}
		getDati();
	}, []);

	return (
		(datiJson != null && arrayCitta.length > 0) ?
			<>
				<div id="divModale"></div>

				<MyContext.Provider value={datiJson}> {/* Questo è il provider più esterno che ha come value tutto il data della fetch*/}
					<NavBar
						navlinks={
							[{ id: 'header', nome: 'HEADER' },
							{ id: 'mappa', nome: 'MAPPA' },
							{ id: 'referente', nome: 'REFERENTE' },
							{ id: 'viaggio', nome: 'VIAGGIO' },
							{ id: 'info', nome: 'INFO' }]}>
					</NavBar>

					<MyContext.Provider value={{ titolo: datiJson.title, nomeCliente: datiJson.customerName, image: datiJson.images[0].image }}>
						<Element name="header" className="anchor">
							<Header />
						</Element>
					</MyContext.Provider>

					<div className="container-fluid">
						<MyContext.Provider value={{ citta: arrayCitta.map(citta => { return { nome: citta.nome, posizione: citta.coordinate } }), dateFrom: datiJson.dateFrom, dateTo: datiJson.dateTo, partecipanti: datiJson.partecipants }}>
							<Element name="mappa" className="anchor mt-5">
								<MyTravel />
							</Element>
						</MyContext.Provider>
						<MyContext.Provider value={{ operator: datiJson.operator, agency: datiJson.agency }}>
							<Element name="referente" className="anchor mt-5">
								<Referente />
							</Element>
						</MyContext.Provider>
						{/**************************************INIZIO ACCORDION VIAGGIO*****************************************/}
						<Element name="viaggio" className="anchor mt-5">
							<div className="row">
								<div className="col-12">
									{arrayCitta.map((citta, counter) => {
										return (
											<div key={"citta-" + counter}>
												<MyContext.Provider value={citta}>
													<Accordion key={citta.id} tipo="citta">
														{citta.giorni.map((giorno, i) => {
															return (
																<div key={"giorno-" + i + "-citta-" + counter}>
																	<MyContext.Provider value={{ giorno: giorno, numeroGiorni: citta.giorni.length }}>
																		<div className="row">
																			<div className="col-1">
																				<Dayline giorno={x++} numeroAttivita={giorno.activities.length} transports={giorno.transports} end={(i + 1) === citta.giorni.length} />
																			</div>
																			<div className="col-10">
																				<DayCard primoGiorno={i < 1} key={giorno.id} />
																			</div>
																			<div className="col-1" />
																		</div>
																	</MyContext.Provider>
																</div>
															)
														})}
													</Accordion>
												</MyContext.Provider>
											</div>
										)
									})}
								</div>
							</div>
						</Element>
						{/****************************************FINE ACCORDION VIAGGIO*****************************************/}

						{/****************************************INIZIO ACCORDION INFO******************************************/}
						<Element name="info" className="anchor w-100 mt-4 mb-5">
							<div className="row mr-0 ml-0" id="info">
								<MyContext.Provider value={{ nome: "TARIFFE" }}>
									<Accordion tipo="info">
										<Tariffa dati={{
											partecipants: datiJson.partecipants, priceTotal: datiJson.priceTotal,
											included: datiJson.included, notIncluded: datiJson.notIncluded
										}} />
									</Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{ nome: "NOTE" }}>
									<Accordion tipo="info"><Note /></Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{ nome: "DOCUMENTI RICHIESTI" }}>
									<Accordion tipo="info">
										<OnlyDescription description={datiJson.documentsRequested.description} />
									</Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{ nome: "ASSICURAZIONE" }}>
									<Accordion tipo="info">
										<OnlyDescription description={datiJson.documentsInsurance.description} />
									</Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{ nome: "CONDIZIONI DI CANCELLAZIONE" }}>
									<Accordion tipo="info">
										<OnlyDescription description={datiJson.documentsCancellation.description} />
									</Accordion>
								</MyContext.Provider>
								<MyContext.Provider value={{ nome: "CONDIZIONI DI PAGAMENTO" }}>
									<Accordion tipo="info">
										<OnlyDescription name={datiJson.documentsPayment.name} description={datiJson.documentsPayment.description} />
									</Accordion>
								</MyContext.Provider>
							</div>
						</Element>
						{/****************************************FINE ACCORDION INFO******************************************/}
					</div> {/*chiusura div container-fluid*/}
				</MyContext.Provider> {/*chiusura provider con value datiJson*/}
				<Footer></Footer>
			</>
			: <></>
	);
}


/*
<VizSensor
	scrollCheck={true}
	partialVisibility={'top'}
	onChange={(isVisible) => {
	isVisible ? setVizHeader(true) : setVizHeader(false);
}}>
*/