const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			addToFavorites: koala => {
				var tempStore = getStore();
				tempStore.favorites.push(koala);
				setStore({ tempStore });
			},
			getPeople: () => {
				fetch("https://swapi.co/api/people/?format=json")
					.then(res => res.json())
					.then(horse => {
						var temp = getStore();
						temp.people = horse.results;
						setStore({ temp });
					});
			},
			getPlanets: () => {
				fetch("https://swapi.co/api/planets/?format=json")
					.then(res => res.json())
					.then(horse => {
						var temp = getStore();
						temp.planets = horse.results;
						setStore({ temp });
					});
			}
		}
	};
};

export default getState;
