import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGrinWink } from "@fortawesome/free-solid-svg-icons";

export default function GhRepositories() {
	const [repositories, setRepositories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [totalFavorites, SetTotalFavorites] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"https://api.github.com/users/reluviari/repos"
				);
				const results = await response.json();
				setRepositories(results);
				setIsLoading(false);
			} catch (e) {
				alert("Ooopsss...Houve um erro na requisição" + e);
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		const filtered = repositories.filter((repo) => repo.favorite);
		document.title = `Você tem ${filtered.length} Favoritos!`;
		SetTotalFavorites(filtered.length);
	}, [repositories]);

	const handleFavorite = (id) => {
		const newRepositories = repositories.map((repo) => {
			return repo.id === id
				? { ...repo, favorite: !repo.favorite }
				: repo;
		});
		setRepositories(newRepositories);
	};

	const renderLine = (repository) => {
		return (
			<tr key={repository.id}>
				<th scope='row'>{repository.id}</th>
				<td>{repository.name}</td>
				<td>
					{repository.favorite && (
						<FontAwesomeIcon icon={faStar} color='yellow' />
					)}
				</td>
				<td>
					<button
						className='btn btn-primary btn-block'
						onClick={() => handleFavorite(repository.id)}>
						{!repository.favorite ? "Favoritar" : "Remover"}
					</button>
				</td>
			</tr>
		);
	};

	return (
		<>
			{!isLoading && (
				<div className='container'>
					<h1>Repositórios do Github para Favoritar</h1>
					<hr />
					<ul>
						<li>useState</li>
						<li>useEffect with componentDidmount</li>
						<li>useEffect with componentDidupdate</li>
					</ul>
					<div
						className='alert alert-info alert-dismissible fade show'
						role='alert'>
						<FontAwesomeIcon icon={faStar} color='yellow' />
						Você tem <strong> {totalFavorites} </strong>Favoritos
						<FontAwesomeIcon icon={faStar} color='yellow' />
						<FontAwesomeIcon icon={faGrinWink} color='green' />
					</div>

					<table className='table table-striped table-dark'>
						<thead>
							<tr>
								<th scope='col'>Id</th>
								<th scope='col'>Nome</th>
								<th scope='col'>Favorito</th>
								<th scope='col'>Ações</th>
							</tr>
						</thead>
						<tbody>{repositories.map(renderLine)}</tbody>
					</table>
				</div>
			)}
		</>
	);
}
