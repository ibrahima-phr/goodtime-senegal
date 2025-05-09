document.addEventListener('DOMContentLoaded', function() {
    // Données des restaurants (simulées)
    const restaurants = [
        {
            id: 1,
            name: "Le Thièsien",
            city: "thies",
            category: "senegalese",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
            rating: 4.5,
            description: "Spécialités sénégalaises dans un cadre traditionnel. Notre thiéboudienne est réputée dans toute la région.",
            phone: "+221 77 123 45 67",
            dishes: [
                {
                    name: "Thiéboudienne",
                    price: 3500,
                    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: "Yassa Poulet",
                    price: 3000,
                    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            ]
        },
        {
            id: 2,
            name: "La Plage Mbour",
            city: "mbour",
            category: "international",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            rating: 4.2,
            description: "Cuisine internationale face à la mer. Dégustez nos plats frais avec une vue imprenable sur l'océan.",
            phone: "+221 77 234 56 78",
            dishes: [
                {
                    name: "Poulet Braisé",
                    price: 4000,
                    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: "Poisson Grillé",
                    price: 4500,
                    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80"
                }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            id: 3,
            name: "Fast Food Thiès",
            city: "thies",
            category: "fastfood",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            rating: 3.8,
            description: "Fast-food moderne proposant burgers, frites et boissons fraîches. Service rapide et prix attractifs.",
            phone: "+221 77 345 67 89",
            dishes: [
                {
                    name: "Burger Sénégalais",
                    price: 2500,
                    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: "Poulet Frites",
                    price: 3000,
                    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80"
                }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            ]
        }
    ];

    // Données des hôtels (simulées)
    const hotels = [
        {
            id: 1,
            name: "Hôtel Les Almadies",
            city: "thies",
            category: "luxe",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            rating: 4.7,
            description: "Hôtel 4 étoiles au cœur de Thiès. Piscine, spa et restaurant gastronomique à votre disposition.",
            phone: "+221 33 987 65 43",
            price: 45000,
            amenities: ["Piscine", "Spa", "Restaurant", "WiFi", "Parking"],
            gallery: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            id: 2,
            name: "Résidence Saly",
            city: "mbour",
            category: "standard",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            rating: 4.0,
            description: "Résidence confortable à 5 minutes de la plage. Chambres climatisées avec kitchenette.",
            phone: "+221 33 876 54 32",
            price: 25000,
            amenities: ["Plage", "WiFi", "Parking", "Climatisation"],
            gallery: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            id: 3,
            name: "Auberge Keur Thiès",
            city: "thies",
            category: "economique",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
            rating: 3.5,
            description: "Auberge conviviale avec jardin. Solution économique pour voyageurs et familles.",
            phone: "+221 33 765 43 21",
            price: 15000,
            amenities: ["Jardin", "WiFi", "Petit déjeuner"],
            gallery: [
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ]
        }
    ];

    // Variables globales
    let currentUser = null;
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;

    // Initialisation
    displayRestaurants(restaurants);
    displayHotels(hotels);
    setupEventListeners();

    // Fonctions d'affichage
    function displayRestaurants(restaurantsToDisplay) {
        const container = document.getElementById('restaurants-container');
        container.innerHTML = '';

        restaurantsToDisplay.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.dataset.id = restaurant.id;
            card.dataset.city = restaurant.city;
            card.dataset.category = restaurant.category;

            card.innerHTML = `
                <div class="restaurant-img">
                    <img src="${restaurant.image}" alt="${restaurant.name}">
                </div>
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <div class="restaurant-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${restaurant.city === 'thies' ? 'Thiès' : 'Mbour'}</span>
                    </div>
                    <div class="restaurant-rating">
                        ${getStarRating(restaurant.rating)}
                    </div>
                    <p class="restaurant-desc">${restaurant.description}</p>
                    <button class="view-btn view-restaurant" data-id="${restaurant.id}">Voir plus</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    function displayHotels(hotelsToDisplay) {
        const container = document.getElementById('hotels-container');
        container.innerHTML = '';

        hotelsToDisplay.forEach(hotel => {
            const card = document.createElement('div');
            card.className = 'hotel-card';
            card.dataset.id = hotel.id;
            card.dataset.city = hotel.city;
            card.dataset.category = hotel.category;

            card.innerHTML = `
                <div class="hotel-img">
                    <img src="${hotel.image}" alt="${hotel.name}">
                </div>
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <div class="hotel-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${hotel.city === 'thies' ? 'Thiès' : 'Mbour'}</span>
                    </div>
                    <div class="hotel-rating">
                        ${getStarRating(hotel.rating)}
                        <span class="price">${hotel.price.toLocaleString()} FCFA/nuit</span>
                    </div>
                    <p class="hotel-desc">${hotel.description}</p>
                    <button class="view-btn view-hotel" data-id="${hotel.id}">Voir plus</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    function getStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars + ` <span>(${rating})</span>`;
    }

    // Fonctions de filtrage
    function filterRestaurants() {
        const activeCityFilter = document.querySelector('.filters .filter-btn[data-city].active')?.dataset.city;
        const activeCategoryFilter = document.querySelector('.filters .filter-btn[data-category].active')?.dataset.category;

        const filtered = restaurants.filter(restaurant => {
            const cityMatch = !activeCityFilter || activeCityFilter === 'all' || restaurant.city === activeCityFilter;
            const categoryMatch = !activeCategoryFilter || restaurant.category === activeCategoryFilter;
            return cityMatch && categoryMatch;
        });

        displayRestaurants(filtered);
    }

    function filterHotels() {
        const activeCityFilter = document.querySelector('#hotels .filters .filter-btn[data-city].active')?.dataset.city;
        const activeCategoryFilter = document.querySelector('#hotels .filters .filter-btn[data-category].active')?.dataset.category;

        const filtered = hotels.filter(hotel => {
            const cityMatch = !activeCityFilter || activeCityFilter === 'all' || hotel.city === activeCityFilter;
            const categoryMatch = !activeCategoryFilter || hotel.category === activeCategoryFilter;
            return cityMatch && categoryMatch;
        });

        displayHotels(filtered);
    }

    // Gestion des modales
    function showRestaurantModal(id) {
        const restaurant = restaurants.find(r => r.id === id);
        if (!restaurant) return;

        const modalContent = document.getElementById('restaurant-modal-content');
        modalContent.innerHTML = `
            <div class="detail-header">
                <div class="detail-img">
                    <img src="${restaurant.image}" alt="${restaurant.name}">
                </div>
                <div class="detail-title">
                    <h3>${restaurant.name}</h3>
                    <div class="detail-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${restaurant.city === 'thies' ? 'Thiès' : 'Mbour'}</span>
                        <span><i class="fas fa-phone"></i> ${restaurant.phone}</span>
                        <span>${getStarRating(restaurant.rating)}</span>
                    </div>
                    <p>${restaurant.description}</p>
                </div>
            </div>
            
            <h4>Notre menu</h4>
            <div class="menu-items">
                ${restaurant.dishes.map(dish => `
                    <div class="menu-item">
                        <img src="${dish.image}" alt="${dish.name}">
                        <div class="menu-item-info">
                            <h5>${dish.name}</h5>
                            <p class="price">${dish.price.toLocaleString()} FCFA</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <h4>Galerie</h4>
            <div class="detail-gallery">
                ${restaurant.gallery.map(img => `
                    <img src="${img}" alt="Galerie ${restaurant.name}">
                `).join('')}
            </div>
            
            <div class="detail-actions">
                <button class="view-btn" onclick="document.getElementById('booking-type').value='restaurant'; document.getElementById('establishment').value=${restaurant.id}; document.getElementById('establishment').dispatchEvent(new Event('change')); document.getElementById('restaurant-modal').style.display='none'; document.getElementById('reservations').scrollIntoView();">Réserver</button>
                <button class="call-btn" onclick="window.location.href='tel:${restaurant.phone.replace(/\s+/g, '')}'"><i class="fas fa-phone"></i> Appeler</button>
            </div>
        `;

        document.getElementById('restaurant-modal').style.display = 'block';
    }

    function showHotelModal(id) {
        const hotel = hotels.find(h => h.id === id);
        if (!hotel) return;

        const modalContent = document.getElementById('hotel-modal-content');
        modalContent.innerHTML = `
            <div class="detail-header">
                <div class="detail-img">
                    <img src="${hotel.image}" alt="${hotel.name}">
                </div>
                <div class="detail-title">
                    <h3>${hotel.name}</h3>
                    <div class="detail-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${hotel.city === 'thies' ? 'Thiès' : 'Mbour'}</span>
                        <span><i class="fas fa-phone"></i> ${hotel.phone}</span>
                        <span>${getStarRating(hotel.rating)}</span>
                        <span><i class="fas fa-money-bill-wave"></i> ${hotel.price.toLocaleString()} FCFA/nuit</span>
                    </div>
                    <p>${hotel.description}</p>
                </div>
            </div>
            
            <h4>Équipements</h4>
            <div class="amenities">
                ${hotel.amenities.map(amenity => `
                    <span class="amenity"><i class="fas fa-check"></i> ${amenity}</span>
                `).join('')}
            </div>
            
            <h4>Galerie</h4>
            <div class="detail-gallery">
                ${hotel.gallery.map(img => `
                    <img src="${img}" alt="Galerie ${hotel.name}">
                `).join('')}
            </div>
            
            <div class="detail-actions">
                <button class="view-btn" onclick="document.getElementById('booking-type').value='hotel'; document.getElementById('establishment').value=${hotel.id}; document.getElementById('establishment').dispatchEvent(new Event('change')); document.getElementById('hotel-modal').style.display='none'; document.getElementById('reservations').scrollIntoView();">Réserver</button>
                <button class="call-btn" onclick="window.location.href='tel:${hotel.phone.replace(/\s+/g, '')}'"><i class="fas fa-phone"></i> Appeler</button>
            </div>
        `;

        document.getElementById('hotel-modal').style.display = 'block';
    }

    // Gestion du formulaire de réservation
    function setupBookingForm() {
        const bookingType = document.getElementById('booking-type');
        const establishmentSelect = document.getElementById('establishment');

        bookingType.addEventListener('change', function() {
            establishmentSelect.disabled = !this.value;
            establishmentSelect.innerHTML = '<option value="">-- Sélectionnez --</option>';

            if (this.value === 'restaurant') {
                restaurants.forEach(restaurant => {
                    const option = document.createElement('option');
                    option.value = restaurant.id;
                    option.textContent = restaurant.name;
                    establishmentSelect.appendChild(option);
                });
            } else if (this.value === 'hotel') {
                hotels.forEach(hotel => {
                    const option = document.createElement('option');
                    option.value = hotel.id;
                    option.textContent = hotel.name;
                    establishmentSelect.appendChild(option);
                });
            }
        });

        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!currentUser) {
                alert('Veuillez vous connecter pour effectuer une réservation.');
                document.getElementById('login-modal').style.display = 'block';
                return;
            }

            const bookingType = document.getElementById('booking-type').value;
            const establishmentId = parseInt(document.getElementById('establishment').value);
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const people = document.getElementById('people').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;

            let establishment;
            if (bookingType === 'restaurant') {
                establishment = restaurants.find(r => r.id === establishmentId);
            } else {
                establishment = hotels.find(h => h.id === establishmentId);
            }

            if (!establishment) {
                alert('Établissement non trouvé');
                return;
            }

            // Ici, normalement vous enverriez ces données à un serveur
            alert(`Réservation confirmée chez ${establishment.name} pour le ${date} à ${time} pour ${people} personne(s). Un SMS de confirmation sera envoyé au ${phone}.`);
            this.reset();
            document.getElementById('establishment').disabled = true;
        });
    }

    // Gestion de l'authentification
    function setupAuth() {
        document.getElementById('login-btn').addEventListener('click', function() {
            document.getElementById('login-modal').style.display = 'block';
        });

        document.getElementById('register-btn').addEventListener('click', function() {
            document.getElementById('register-modal').style.display = 'block';
        });

        document.getElementById('show-register').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('login-modal').style.display = 'none';
            document.getElementById('register-modal').style.display = 'block';
        });

        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Simulation de connexion
            currentUser = {
                email,
                name: "Utilisateur Test"
            };

            alert(`Bienvenue ${currentUser.name}!`);
            document.getElementById('login-modal').style.display = 'none';
            this.reset();
        });

        document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;

            if (password !== confirm) {
                alert('Les mots de passe ne correspondent pas');
                return;
            }

            // Simulation d'inscription
            currentUser = {
                email,
                name,
                phone
            };

            alert(`Inscription réussie! Bienvenue ${name}.`);
            document.getElementById('register-modal').style.display = 'none';
            this.reset();
        });
    }

    // Fermeture des modales
    function setupModalClose() {
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        });

        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    // Écouteurs d'événements
    function setupEventListeners() {
        // Filtres restaurants
        document.querySelectorAll('#restaurants .filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#restaurants .filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterRestaurants();
            });
        });

        // Filtres hôtels
        document.querySelectorAll('#hotels .filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#hotels .filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterHotels();
            });
        });

        // Boutons "Voir plus"
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-restaurant')) {
                showRestaurantModal(parseInt(e.target.dataset.id));
            } else if (e.target.classList.contains('view-hotel')) {
                showHotelModal(parseInt(e.target.dataset.id));
            }
        });

        // Formulaire de réservation
        setupBookingForm();

        // Authentification
        setupAuth();

        // Fermeture des modales
        setupModalClose();

        // Newsletter
        document.getElementById('newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Merci pour votre inscription à notre newsletter (${email})!`);
            this.reset();
        });
    }
});

